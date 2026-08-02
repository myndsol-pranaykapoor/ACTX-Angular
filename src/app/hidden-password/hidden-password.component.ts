import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pds-hidden-password',
  standalone: true,
  templateUrl: './hidden-password.component.html',
  styleUrl: './hidden-password.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HiddenPasswordComponent {
  @Input() passwordLength: number = 0;

  get circles(): number[] {
    return Array.from({ length: this.passwordLength }, (_, i) => i);
  }
}
