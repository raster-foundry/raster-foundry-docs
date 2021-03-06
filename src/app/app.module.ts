import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { TopbarModule } from './topbar/topbar.module';
import { OperationsModule } from './operations/operations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    TopbarModule,
    OperationsModule
  ],
  providers: [AuthService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
