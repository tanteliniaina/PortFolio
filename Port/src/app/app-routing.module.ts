import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*importation personnel*/
import { AProposComponent } from './apropos/apropos.component';
import { CurcusComponent } from './curcus/curcus.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ObjectifsComponent } from './objectifs/objectifs.component';


/*routing des pages*/
const routes: Routes = [
  { path: 'about', component: AProposComponent, data: { label: 'Mon propos' } },
  { path: 'curcus', component: CurcusComponent, data: { label: 'Mon curcus académique' } },
  { path: 'experiences', component: ExperiencesComponent, data: { label: 'Mes expériences professionnel' } },
  { path: 'goals', component: ObjectifsComponent, data: { label: 'Mes objectifs'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
