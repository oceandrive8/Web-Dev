import { Component } from '@angular/core';
import { Goods } from './skeleton';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductItemComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: string[] = ['Makeup', 'Skincare', 'Fragrance', 'Hair'];
  products: Goods[] = [
    new Goods('1', 'Dior Backstage Glow Face Palette', 'румяна, хайлайтер 004 Rose Gold', '28 991', 'https://resources.cdn-kaspi.kz/img/m/p/hea/hf3/63921723867166.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-rumjana-hailaiter-004-rose-gold-100796095/?c=750000000', 'Makeup', 0),
    new Goods('2', 'Rom&nd Glasting Melting Balm', '07 Mauve Whip блеск для губ розовый', '3 186', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/70294342369310.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/rom-nd-glasting-melting-balm-07-mauve-whip-blesk-dlja-gub-rozovyi-109457246/?c=750000000', 'Skincare', 0),
    new Goods('3', 'Dasique тени прессованные', 'Vegan Mood Shadow Palette #02 Cool Basic', '18 299', 'https://resources.cdn-kaspi.kz/img/m/p/p40/p5c/5857803.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/dasique-teni-pressovannye-vegan-mood-shadow-palette-02-cool-basic-123527111/?c=750000000', 'Makeup', 0),
    new Goods('4', 'Rom&nd Glasting Color Gloss', 'блеск для губ розовый 04 Grapy Way', '3 298', 'https://resources.cdn-kaspi.kz/img/m/p/h09/h62/84750277345310.png?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/rom-nd-glasting-color-gloss-blesk-dlja-gub-rozovyi-04-grapy-way-115488555/?c=750000000', 'Makeup', 0),
    new Goods('5', 'Charlotte Tilbury AirBrush Flawless Finish Powder', 'Powder сухая Fair светло-бежевый', '24 495', 'https://resources.cdn-kaspi.kz/img/m/p/h82/ha6/64078002815006.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/charlotte-tilbury-airbrush-flawless-finish-powder-suhaja-fair-svetlo-bezhevyi-100740268/?c=750000000', 'Makeup', 0),
    new Goods('6', 'CHANEL Les Beiges Water-Fresh Tint', 'A full-coverage powder foundation', '38 200', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hff/86728034353182.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/chanel-les-beiges-water-fresh-tint-tonal-nyi-krem-light-30-ml-113211487/?c=750000000', 'Makeup', 0),
    new Goods('7', 'Flower Knows тени прессованные', 'Strawberry Cupid 02 Strawberry Cassis', '18 500', 'https://resources.cdn-kaspi.kz/img/m/p/p37/pd8/22632142.JPG?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/flower-knows-teni-pressovannye-strawberry-cupid-02-strawberry-cassis-134015139/?c=750000000', 'Makeup', 0),
    new Goods('8', 'FENTY BEAUTY Diamond Bomb', 'хайлайтер How Many Carats', '23 670', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h8f/85035234394142.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/fenty-beauty-diamond-bomb-hailaiter-how-many-carats-112836972/?c=750000000', 'Makeup', 0),
    new Goods('9', 'Rhode Peptide Lip Tint', 'бальзам оттеночный для губ raspberry jelly', '9 465', 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1f/84556365824030.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/rhode-peptide-lip-tint-bal-zam-ottenochnyi-dlja-gub-raspberry-jelly-114783902/?c=750000000', 'Skincare', 0),
    new Goods('10', 'Dr. Althea крем 345', 'Relief для лица 50 мл', '8 990', 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000', 'Skincare', 0),
    new Goods('11', 'Round Lab Mugwort', 'Calming Cleanser пенка 150 мл', '3 568', 'https://resources.cdn-kaspi.kz/img/m/p/h19/hc6/86199391322142.jpg?format=gallery-medium', 4.5, 'https://kaspi.kz/shop/p/round-lab-mugwort-calming-cleanser-penka-150-ml-112620269/?c=750000000', 'Skincare', 0),
    new Goods('12', "D'Alba крем Waterfull Tone-up", 'SPF 50+ PA++++ для лица', '13 897', 'https://resources.cdn-kaspi.kz/img/m/p/pb4/p56/21437517.jpeg?format=gallery-medium', 5.0, 'https://kaspi.kz/shop/p/d-alba-krem-waterfull-tone-up-spf-50-pa-dlja-litsa-dlja-zony-dekol-te-50-ml-109478962/?c=750000000', 'Skincare', 0),
    new Goods('13', 'Prada Paradoxe ','парфюмерная вода EDP 90 мл, для женщин', '78 899', 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h30/86854370263070.jpg?format=gallery-medium', 4.0, 'https://kaspi.kz/shop/p/prada-paradoxe-parfjumernaja-voda-edp-90-ml-dlja-zhenschin-115508628/?c=750000000', 'Fragrance', 0),
    new Goods('14', 'Aesop Hair', 'Volumising Shampoo шампунь 500 мл', '22 815', 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8f/65585565827102.jpg?format=gallery-medium', 4.8,'https://kaspi.kz/shop/p/aesop-hair-volumising-shampoo-shampun-500-ml-107528350/?c=750000000', 'Hair', 0),
    new Goods('15', 'Gisou Honey ', 'Hair Mask маска 230 мл', '38 875', 'https://resources.cdn-kaspi.kz/img/m/p/he5/h73/79964891250718.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/gisou-honey-infuced-hair-mask-maska-230-ml-109833090/?c=750000000', 'Hair', 0),
    new Goods('16', 'SimplyO Refreshing Scalp Shampoo', '(wild flower) шампунь 500 мл', '11 990', 'https://resources.cdn-kaspi.kz/img/m/p/pe2/p3e/9760600.jpg?format=gallery-medium', 4.3, 'https://kaspi.kz/shop/p/simplyo-refreshing-scalp-shampoo-wild-flower-shampun-500-ml-130458624/?c=750000000', 'Hair', 0),
    new Goods('17', 'Diptyque Fleur de Peau ', 'парфюмерная вода EDP 75 мл', '142 000', 'https://resources.cdn-kaspi.kz/img/m/p/h49/h65/64347941634078.jpg?format=gallery-medium', 5.0, 'https://kaspi.kz/shop/p/diptyque-fleur-de-peau-parfjumernaja-voda-edp-75-ml-101369820/?c=750000000', 'Fragrance',0),
    new Goods('18', 'La Sultane de Saba Ayurvedique ', 'парфюмерная вода EDP 100 мл', '26 295','https://resources.cdn-kaspi.kz/img/m/p/h0c/h2a/86956147015710.jpg?format=gallery-medium', 4.5, 'https://kaspi.kz/shop/p/la-sultane-de-saba-ayurvedique-parfjumernaja-voda-edp-100-ml-uniseks-110743746/?c=750000000', 'Fragrance', 0),
    new Goods('19', 'Shiseido маска Fino Premium Touch ', 'восстановление и увлажнение', '2 389', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h74/86498035531806.jpg?format=gallery-medium', 5.0,'https://kaspi.kz/shop/p/shiseido-maska-fino-premium-touch-vosstanovlenie-i-uvlazhnenie-s-pchelinym-matochnym-molochkom-230-ml-108384966/?c=750000000', 'Hair', 0),
    new Goods('20', 'SimplyO', 'состав Hair Serum 80 мл', '7 990', 'https://resources.cdn-kaspi.kz/img/m/p/p6a/ped/9670654.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/simplyo-sostav-hair-serum-80-ml-130433175/?c=750000000', 'Hair', 0),
    new Goods('21', 'Diptyque Vetyverio ', 'парфюмерная вода EDP 75 мл', '140 570', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hce/63835267563550.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/diptyque-vetyverio-parfjumernaja-voda-edp-75-ml-17303304/?c=750000000', 'Fragrance', 0 ),
    new Goods('22', 'Dior Miss Dior ', 'парфюмерная вода EDP 50 мл', '54 599', 'https://resources.cdn-kaspi.kz/img/m/p/hd7/hb2/64266750427166.jpg?format=gallery-medium', 4.2,'https://kaspi.kz/shop/p/dior-miss-dior-parfjumernaja-voda-edp-50-ml-103903573/?c=750000000', 'Fragrance', 0)
    ];

    displayedProducts: Goods[] = [...this.products];

    updateFilteredProducts(category: string | null) {
      this.displayedProducts = category ? this.products.filter(p => p.category === category) : [...this.products];
    }
  
    likeProduct(product: Goods) {
      product.likes++;
    }
  
    removeProduct(product: Goods) {
      this.products = this.products.filter(p => p !== product);
      this.displayedProducts = this.displayedProducts.filter(p => p !== product);
    }
  
    sharing(id: string): void {
      console.log('Opening WhatsApp:', `https://wa.me/?text=${id}`);
      window.open(`https://wa.me/?text=${id}`, '_blank');
    }    
        
}


















