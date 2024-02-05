import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {


  menu= [
    {'id':1,'name':'Andhra LunchBox','description':'Tasty,Spicy and tangy. Lunch box comes with delicious pappu pachadi and ghee','image':'../../assets/andhra food.png'},
    {'id':2,'name':'Tamil LunchBox','description':'Aromatic, delicious and mouth watering dishes like Sambar poriyal makes this lunch yummy','image':'../../assets/tamilnadu-food.png'},
    {'id':3,'name':'Kerala LunchBox','description':'Coconut oils, rich spices and papaddams is our signature of this lunch box','image':'../../assets/Kerala food.png'},
    {'id':4,'name':'Kannada LunchBox','description':'Dishes with loads of ghee, Jaggery and wide variety of baths makes this box special','image':'../../assets/karnataka.png'},
    {'id':5,'name':'NorthIndian LunchBox','description':'Variety of hot parathas, spicy panner and mouth watering sweets make this box special','image':'../../assets/north indian.png'},
    {'id':6,'name':'Veg Biryani','description':'Hot sizzling and spicy dish with right nix of veggies and heart content of ghee makes this extra special','image':'../../assets/veg-biryani .png'},
  ]
}
