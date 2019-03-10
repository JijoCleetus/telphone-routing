import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TelephoneComponent } from './telephone/telephone.component';

const routes: Routes = [
    { path: '', component: TelephoneComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
      ]
})


export class AppRoutingModule {

}