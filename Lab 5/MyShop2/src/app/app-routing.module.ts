import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },  // ✅ Default route
  { path: 'products', component: ProductListComponent }       // ✅ Route for product list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // ✅ Ensure RouterModule.forRoot() is used
  exports: [RouterModule]
})
export class AppRoutingModule { }






