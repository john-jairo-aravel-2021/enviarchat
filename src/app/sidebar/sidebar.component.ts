import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  text= '¡!!!hola mundo¡¡¡¡¡';

  saludar(): void{
    console.log('!hola mundo¡¡¡¡¡¡¡¡');
  }

}