import { Routes } from '@angular/router';
import { StartComponent } from './components/feature/start/start.component';
import { TodoViewComponent } from './components/feature/todo-view/todo-view.component';

export const routes: Routes = [

	// ? start for dev
	{ path: '', component: TodoViewComponent },

	// 	~ correct start 
	// { path: '', component: StartComponent},
	// { path: 'todo', component: TodoViewComponent },




];
