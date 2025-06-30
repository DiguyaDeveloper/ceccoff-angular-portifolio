import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input({ required: true }) name!: 'github' | 'linkedin' | 'youtube';
  @Input() class = 'w-6 h-6';
}
