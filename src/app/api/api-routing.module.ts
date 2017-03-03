import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { ApiPageComponent } from './page/page.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'api', component: ApiPageComponent}
    ])],
    exports: [RouterModule]
})
export class ApiRoutingModule {}
