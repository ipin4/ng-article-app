import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AboutComponent } from './about/about.component';

import { reducers, metaReducers } from './reducers/reducers';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    AboutComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
