import { Routes } from '@angular/router';
import { TodoViewComponent } from './components/feature/todo-view/todo-view.component';
import { StartSiteComponent } from './components/start-site/start-site/start-site.component';

export const routes: Routes = [

 { path: '', component: StartSiteComponent},
	{ path: 'todo', component: TodoViewComponent },


];
