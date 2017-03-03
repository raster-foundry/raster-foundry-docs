import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppHelpPageComponent } from './app-help-page/app-help-page.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'help', component: AppHelpPageComponent }
    ])],
    exports: [RouterModule]
})
export class AppHelpRoutingModule {}
