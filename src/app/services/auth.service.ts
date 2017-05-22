import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { SettingsService } from './settings.service';

export class TokenExpiredError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'Token Expired Error';
    this.message = message;
    this.stack = (<any>new Error()).stack;
  }
  toString() {
    return `${this.name}: ${this.message}`;
  }
}

export class TokenParseError extends Error {
  constructor(public message: string, error?: Error) {
    super(message);
    this.name = 'Token Parse Error';
    this.message = message;
    this.stack = error ? error.stack : (<any>new Error()).stack;
  }

  static fromError(error: Error) {
    return new TokenParseError(error.message, error);
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

@Injectable()
export class AuthService {
  private sessionToken: string;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, private settingsService: SettingsService) { }

  validateToken(token: string): Error | any {
    let error: Error;
    try {
      let decoded = this.jwtHelper.decodeToken(token);
      if (this.jwtHelper.isTokenExpired(token)) {
        let expiredAt = this.jwtHelper.getTokenExpirationDate(token)
        error = new TokenExpiredError(`Expired at ${expiredAt}`);
      } else if (!decoded) {
        error = new TokenParseError('Error parsing token');
      } else {
        return decoded;
      }
    } catch (e) {
      error = TokenParseError.fromError(e);
    }
    return error;
  }

  set token(token: string) {
    let validationResult = this.validateToken(token);
    if (validationResult instanceof Error) {
      throw (validationResult as Error);
    } else {
      this.sessionToken = token;
    }
  }

  public setToken(token: string) {
    try {
      let decodedToken = this.jwtHelper.decodeToken(token);
      if (this.jwtHelper.isTokenExpired(token)) {
        return { error: 'Token is expired' };
      }
      this.sessionToken = token;
      return decodedToken;
    } catch (e) {
      return { error: e.message };
    }
  }

  get token() {
    if (this.sessionToken && this.jwtHelper.isTokenExpired(this.sessionToken)) {
      this.sessionToken = null;
    }
    return this.sessionToken;
  }

  public getSessionToken(refreshToken: string): Observable<any> {
    let requestUrl = `${this.settingsService.apiUrl}/tokens`
    return this.http.post(requestUrl, {refresh_token: refreshToken});
  }
}
