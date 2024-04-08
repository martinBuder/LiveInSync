import { Routes } from '@angular/router';
import { TodoViewComponent } from './components/feature/todo-view/todo-view.component';
import { StartSiteComponent } from './components/start-site/start-site/start-site.component';
import { RegisterComponent } from './components/start-site/register/register.component';
import { ForgotPasswordComponent } from './components/start-site/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/start-site/new-password/new-password.component';
import { DashboardComponent } from './components/feature/dashboard/dashboard.component';
import { ShoppingComponent } from './components/feature/shopping/shopping.component';
import { CleaningComponent } from './components/feature/cleaning/cleaning.component';
import { CalendarComponent } from './components/feature/calendar/calendar.component';

export const routes: Routes = [
  { path: '', component: StartSiteComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'newPassword', component: NewPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: TodoViewComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'cleaning', component: CleaningComponent },
  { path: 'calendar', component: CalendarComponent },
];
