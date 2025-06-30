import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';

  get variantClasses(): string {
    if (this.variant === 'primary') {
      return 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-500/25 border-2 border-orange-500/20 hover:border-orange-400/40 hover:scale-105 active:scale-95';
    }
    return 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg backdrop-blur-sm bg-slate-900/50 hover:bg-orange-500 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 active:scale-95';
  }
}
