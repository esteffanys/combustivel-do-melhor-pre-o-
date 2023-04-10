import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  calcular: any;
  cor:any;
  constructor() {}


ngOnInit(){
  this.calcular = "Álcool ou Gasolina?";
  this.cor = "secundary";
}


resultado(alcool: IonInput, gasolina: IonInput) {
  let calculo: any;
  if(alcool.value != null && gasolina.value != null){
   calculo = +alcool.value / +gasolina.value;
   if(calculo <= 0.7 ){
     this.calcular = 'Melhor abastecer com Alcool'
     this.cor = "danger"
   }else {
     this.calcular = 'Melhor abastecer com Gasolina';
     this.cor = "#28ba62"
   }
  }
 }
}
