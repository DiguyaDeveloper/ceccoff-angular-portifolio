import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  color: string;
  isWorkInProgress?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);

  isMenuOpen = false;

  readonly navItems = signal<ReadonlyArray<NavItem>>([
    { label: 'Início', path: '/', color: 'text-cyan-400' },
    {
      label: 'Sobre',
      path: '/sobre',
      color: 'text-emerald-400',
      isWorkInProgress: true,
    },
  ]);

  readonly navItemsFiltered = computed(() =>
    this.navItems().filter((item) => !item.isWorkInProgress),
  );

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'exact',
      matrixParams: 'ignored',
      fragment: 'ignored',
    });
  }
}
