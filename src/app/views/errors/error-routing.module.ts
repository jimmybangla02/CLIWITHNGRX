import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoResultsComponent } from './no-results/no-results.component';

const routes: Routes = [
    { path: '***', component: NoResultsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule { }
