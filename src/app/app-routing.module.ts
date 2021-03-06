import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import{AddContainerComponent} from'./components/add-container/add-container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
  {
    path:'add',
    component:AddContainerComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
