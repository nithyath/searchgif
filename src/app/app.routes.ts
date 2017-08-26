import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from'./components/main/main.components';
import {AboutComponent} from'./components/about/about.components';


const appRoutes: Routes = [
	  { 
		  path: '', 
		  component: MainComponent 
	  },
	  { 
		  path: 'about',
		  component: AboutComponent
	  }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);