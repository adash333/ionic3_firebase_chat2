export class Password {
  email: string;
  password: string;
  password_confirmation: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
  }

  reset(): void {
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
  }
}