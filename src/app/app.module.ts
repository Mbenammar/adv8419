import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import { CardRotatorComponent } from './card-rotator/card-rotator.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListComponent } from './cvTech/list/list.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { Nf404Component } from './nf404/nf404.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPersonneComponent } from './cvTech/add-personne/add-personne.component';
import { SearchComponent } from './cvTech/search/search.component';
import {AuthentificationInterceptorProvider} from './intercepteurs/login.interceptor';
import {LoginGuard} from './guards/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardRotatorComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    LoginComponent,
    HeaderComponent,
    DetailCvComponent,
    Nf404Component,
    ObservableComponent,
    HttpComponent,
    AddPersonneComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthentificationInterceptorProvider,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
