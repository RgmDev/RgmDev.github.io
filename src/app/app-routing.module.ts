import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
