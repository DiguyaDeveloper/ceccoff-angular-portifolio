import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly skills: ReadonlyArray<string> = [
    'Node.js',
    'Java',
    'Javascript',
    'Typescript',
    'Angular / React',
    'Architecture',
    'Clean Code',
  ];
}
