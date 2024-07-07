import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type Routes = { name: string; path: string; icon?: string };

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  public contentBackdrops: boolean = false;
  public sideNavMode: MatDrawerMode = 'over';

  public routes: Routes[] = [
    { name: 'Inicio', path: '/home', icon: 'home' },
    { name: 'Productos', path: '/products', icon: 'shopping_cart' },
    { name: 'Marcas', path: '/brands', icon: 'branding_watermark' },
    { name: 'Facturación', path: '/billing', icon: 'receipt' },
  ];
}
