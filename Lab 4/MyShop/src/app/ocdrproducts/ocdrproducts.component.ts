import { Component } from '@angular/core';
import { Goods } from "../skeleton";
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ocdrproducts',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './ocdrproducts.component.html',
  styleUrls: ['./ocdrproducts.component.css']
})
export class OcdrproductsComponent {
  products: Goods[] = [];

  constructor() {
    this.products = [
      new Goods(1, 'Dior Backstage Glow Face Palette ', 'румяна, хайлайтер 004 Rose Gold', '28 991', 'https://resources.cdn-kaspi.kz/img/m/p/hea/hf3/63921723867166.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-rumjana-hailaiter-004-rose-gold-100796095/?c=750000000'),
      new Goods(2, 'Rom&nd Glasting Melting Balm', '07 Mauve Whip блеск для губ розовый', '3 186', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/70294342369310.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/rom-nd-glasting-melting-balm-07-mauve-whip-blesk-dlja-gub-rozovyi-109457246/?c=750000000'),
      new Goods(3, 'Dasique тени прессованные ', 'Vegan Mood Shadow Palette #02 Cool Basic', '18 299', 'https://resources.cdn-kaspi.kz/img/m/p/p40/p5c/5857803.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/dasique-teni-pressovannye-vegan-mood-shadow-palette-02-cool-basic-123527111/?c=750000000'),
      new Goods(4, 'Rom&nd Glasting Color Gloss', 'блеск для губ розовый 04 Grapy Way', '3 298', 'https://resources.cdn-kaspi.kz/img/m/p/h09/h62/84750277345310.png?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/rom-nd-glasting-color-gloss-blesk-dlja-gub-rozovyi-04-grapy-way-115488555/?c=750000000'),
      new Goods(5, 'Пудра Charlotte Tilbury AirBrush Flawless Finish Powder', ' Powder сухая Fair светло-бежевый', '24 495', 'https://resources.cdn-kaspi.kz/img/m/p/h82/ha6/64078002815006.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/charlotte-tilbury-airbrush-flawless-finish-powder-suhaja-fair-svetlo-bezhevyi-100740268/?c=750000000'),
      new Goods(6, 'CHANEL Les Beiges Water-Fresh Tint', 'A full-coverage powder foundation', '38 200', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hff/86728034353182.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/chanel-les-beiges-water-fresh-tint-tonal-nyi-krem-light-30-ml-113211487/?c=750000000'),
      new Goods(7, 'Flower Knows тени прессованные', 'Strawberry Cupid 02 Strawberry Cassis', '18 500', 'https://resources.cdn-kaspi.kz/img/m/p/p37/pd8/22632142.JPG?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/flower-knows-teni-pressovannye-strawberry-cupid-02-strawberry-cassis-134015139/?c=750000000'),
      new Goods(8, 'FENTY BEAUTY Diamond Bomb ', 'хайлайтер How Many Carats', '23 670', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h8f/85035234394142.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/fenty-beauty-diamond-bomb-hailaiter-how-many-carats-112836972/?c=750000000'),
      new Goods(9, 'Rhode Peptide Lip Tint ', 'бальзам оттеночный для губ raspberry jelly', '9 465', 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1f/84556365824030.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/rhode-peptide-lip-tint-bal-zam-ottenochnyi-dlja-gub-raspberry-jelly-114783902/?c=750000000'),
      new Goods(10, 'Dr. Althea крем 345', 'Relief для лица 50 мл', '8 990', 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000'),
      new Goods(11, 'Round Lab Mugwort ', 'Calming Cleanser пенка 150 мл','3 568' ,'https://resources.cdn-kaspi.kz/img/m/p/h19/hc6/86199391322142.jpg?format=gallery-medium', 4.5, 'https://kaspi.kz/shop/p/round-lab-mugwort-calming-cleanser-penka-150-ml-112620269/?c=750000000'),
      new Goods(12, "D'Alba крем Waterfull Tone-up ", 'SPF 50+ PA++++ для лица','13 897', 'https://resources.cdn-kaspi.kz/img/m/p/pb4/p56/21437517.jpeg?format=gallery-medium', 5.0, 'https://kaspi.kz/shop/p/d-alba-krem-waterfull-tone-up-spf-50-pa-dlja-litsa-dlja-zony-dekol-te-50-ml-109478962/?c=750000000')
    ];
  }

  sharing(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      const encodedLink = encodeURIComponent(product.productLink);
      const whatsappShareUrl = `https://wa.me/?text=${encodedLink}`;
      window.open(whatsappShareUrl, '_blank');
    }
  }  
}


