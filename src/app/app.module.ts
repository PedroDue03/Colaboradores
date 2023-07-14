import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { TableComponent } from './screens/home/table/table.component';
import { MenuComponent } from './screens/home/menu/menu.component';
import { HeaderComponent } from './screens/home/header/header.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    MenuComponent,
    HeaderComponent,
    CollaboratorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
