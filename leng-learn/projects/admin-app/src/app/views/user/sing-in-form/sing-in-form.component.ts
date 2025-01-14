import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sing-in-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sing-in-form.component.html',
  styleUrl: './sing-in-form.component.scss'
})
export class SingInFormComponent {

}
