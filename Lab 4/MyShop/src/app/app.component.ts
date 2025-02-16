import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OcdrproductsComponent } from './ocdrproducts/ocdrproducts.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OcdrproductsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyShop';
}

