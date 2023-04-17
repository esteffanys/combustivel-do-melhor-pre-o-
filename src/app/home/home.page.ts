import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,ReactiveFormsModule,FormGroup],
})
export class HomePage {
  calcular: any;
  cor:any;
  constructor(private fb:FormBuilder) {
    this.FormGroup=fb.group({
      alcool :['',[Validators.required]],
      gasolina:['',[Validators,required,Validators.min(0.1)]]
    });
  }


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

 limpar(){
  FormGroup
 }
}
