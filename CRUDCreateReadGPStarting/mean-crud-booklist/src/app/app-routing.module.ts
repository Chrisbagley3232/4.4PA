import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books-list' },
  { path: 'books-list', component: BooksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
