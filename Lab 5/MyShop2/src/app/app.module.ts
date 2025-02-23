import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';  
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],  
  imports: [BrowserModule, RouterModule.forRoot(routes)],  
  bootstrap: [AppComponent]
})
export class AppModule {}








