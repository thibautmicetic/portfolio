import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfilComponent } from './profil/profil.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {path: 'education', component: EducationComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'experiences', component: ExperiencesComponent},
    {path: '', component: ProfilComponent},
];
