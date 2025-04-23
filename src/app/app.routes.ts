import { Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { DetailsscreenComponent } from './detailsscreen/detailsscreen.component';

export const routes: Routes = [
    {path:'', component: HomescreenComponent, title:'Home Screen'},
    {path:'one-pet/:id', component: DetailsscreenComponent, title:'Details Screen'},
];
