import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonComponent } from '../button/button.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { WebFooterComponent } from '../web-footer/web-footer.component';
import { ChipTagComponent } from '../chip-tag/chip-tag.component';

type LoginState = 'default' | 'error' | 'accepted';

@Component({
  selector: 'pds-web-login-screen',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    ButtonComponent,
    SectionHeaderComponent,
    WebFooterComponent,
    ChipTagComponent,
  ],
  templateUrl: './web-login-screen.component.html',
  styleUrl: './web-login-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class WebLoginScreenComponent {
  @Output() navigateToHome = new EventEmitter<void>();
  @Output() navigateToSelectModule = new EventEmitter<void>();

  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  usernameState: LoginState = 'default';
  passwordState: LoginState = 'default';
  loginAttempted: boolean = false;
  errorMessage: string = 'Invalid username or password';

  private readonly VALID_USERNAME = 'pranay.kapoor';
  private readonly VALID_PASSWORD = 'Mynd@123';

  get isLoginDisabled(): boolean {
    return !this.username.trim() || !this.password.trim();
  }

  onUsernameChange(value: string) {
    this.username = value;
    // Reset state when user changes input after failed login
    if (this.loginAttempted && (this.usernameState === 'error' || this.passwordState === 'error')) {
      this.usernameState = 'default';
      this.passwordState = 'default';
      this.loginAttempted = false;
    }
  }

  onPasswordChange(value: string) {
    this.password = value;
    // Reset state when user changes input after failed login
    if (this.loginAttempted && (this.usernameState === 'error' || this.passwordState === 'error')) {
      this.usernameState = 'default';
      this.passwordState = 'default';
      this.loginAttempted = false;
    }
  }

  onPasswordActionClick() {
    this.passwordVisible = !this.passwordVisible;
  }

  onLoginClick() {
    this.loginAttempted = true;

    const usernameCorrect = this.username.trim() === this.VALID_USERNAME;
    const passwordCorrect = this.password === this.VALID_PASSWORD;

    if (usernameCorrect && passwordCorrect) {
      // Both correct - set to accepted state and navigate
      this.usernameState = 'accepted';
      this.passwordState = 'accepted';
      console.log('Login successful');
      // Navigate to home screen
      this.navigateToHome.emit();
    } else {
      // Either or both incorrect - set to error state
      this.usernameState = 'error';
      this.passwordState = 'error';
      console.log('Login failed - incorrect credentials');
    }
  }

  onForgotPasswordClick() {
    console.log('Forgot Password clicked');
  }

  onKnowledgeCentreClick() {
    this.navigateToSelectModule.emit();
  }

  onPasswordKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !this.isLoginDisabled) {
      this.onLoginClick();
    }
  }
}
