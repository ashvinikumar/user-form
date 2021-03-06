import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
