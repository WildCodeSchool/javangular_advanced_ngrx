import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './+state/todo.reducer';
import { TodosComponent } from './todo/todo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
                  StoreModule.forRoot({
                    todo: todoReducer
                  })
                 ],
  declarations: [ AppComponent, TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
