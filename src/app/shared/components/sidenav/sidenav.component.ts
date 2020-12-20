import { Component, OnInit, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  title = 'PBL Analytics - Navegação';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false; // 👈 notice this
  constructor(private overlayContainer: OverlayContainer) {}
  ngOnInit(): void {}
  // 👇 notice below
  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }
}