import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from '../web-header/web-header.component';
import { CommandBarComponent } from '../command-bar/command-bar.component';
import { WebFooterComponent } from '../web-footer/web-footer.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'pds-select-module-screen',
  standalone: true,
  imports: [CommonModule, WebHeaderComponent, CommandBarComponent, WebFooterComponent, SectionHeaderComponent],
  templateUrl: './select-module-screen.component.html',
  styleUrl: './select-module-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SelectModuleScreenComponent {
  @Output() back = new EventEmitter<void>();
  @Output() navigateToMinimumWages = new EventEmitter<void>();
  @Output() showUpdatesPopup = new EventEmitter<void>();

  onBackClick() {
    this.back.emit();
  }

  onFooterAction1() {
    console.log('Footer action 1 clicked');
  }

  onFooterAction2() {
    console.log('Footer action 2 clicked');
  }

  onCommandBarSecondaryClick() {
    this.showUpdatesPopup.emit();
  }

  onCommandBarPrimaryClick() {
    this.back.emit();
  }

  onMinimumWagesClick() {
    this.navigateToMinimumWages.emit();
  }
}
