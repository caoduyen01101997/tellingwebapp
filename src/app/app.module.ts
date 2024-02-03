import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ImportDiaryComponent } from './import-diary/import-diary.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DashboardModule } from './home/dashboard/dashboard.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'diary', component: ImportDiaryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: DashboardComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        ImportDiaryComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        DashboardModule,
        CKEditorModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppModule { }
