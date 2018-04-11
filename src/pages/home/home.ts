import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public equipamentosMock = [
    {
      descricao: 'Orion 6B',
      acessorios: ['chave', 'bobina', 'impressora', 'sensor'],
      pecas: [
        { descricao: 'sensor do dia', preco: 2.5 },
        { descricao: 'sensor do cabeçote', preco: 10 },
      ],
    },
    {
      descricao: 'Prisma SF R02',
      acessorios: ['chave', 'bobina', 'impressora', 'sensor'],
      pecas: [
        { descricao: 'sensor do dia', preco: 2.5 },
        { descricao: 'sensor do cabeçote', preco: 10 },
      ],
    },
  ];

  public form: FormGroup;
  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.initForm();
   }

  initForm() {
    this.form = this.fb.group({
      equipamentos: this.fb.array([])
    });
    this.addEquipamento();
  }

  equipamentoControl() {
    return this.fb.group({
      modelo: [''],
      items: this.fb.array([]),
    });
  }

  itemControl() {
   return this.fb.group({
      descricao: [''],
      quantidade: [1],
    });
  }

  addEquipamento() {
    const equipamentos: FormArray = <FormArray>this.form.get('equipamentos');
    equipamentos.push(this.equipamentoControl());
  }

  addItem(i) {
    const items = (<FormArray>this.form.controls['equipamentos']).at(i).get('items') as FormArray;
    items.push(this.itemControl());
  }


}
