import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'todo',
    templateUrl: 'todo.html'
})
export class TodoPage{
    constructor(public navCtrl: NavController){

    }

    pushTodo(){
        this.navCtrl.push(TodoPage);
    }
}