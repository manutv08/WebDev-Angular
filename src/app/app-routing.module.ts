import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes:Routes = [
  {path:'studentlist', component:StudentlistComponent},
  {path:'studentdetails', component:StudentDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
