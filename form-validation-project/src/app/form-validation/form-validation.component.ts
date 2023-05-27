import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  formData = {
    name: '',
    email: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    if (this.formData.name === "admin" && this.formData.email === "admin") {
      this.router.navigate(['/welcome'], { queryParams: { name: this.formData.name } });
    }
  }
}

