import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { UploadComponent } from '../features/upload/upload.component';

export const routes: Routes = [
	{path:'', component:HomeComponent},
	{path:'upload', component:UploadComponent},
	{path: '**', redirectTo:''}
];
