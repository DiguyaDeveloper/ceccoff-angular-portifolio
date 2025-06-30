import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '@atoms/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
