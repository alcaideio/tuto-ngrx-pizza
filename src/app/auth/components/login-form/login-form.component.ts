import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Credentials } from '../../models/user';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Input() errorMessage: string | null;
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Output() login = new EventEmitter<Credentials>();

  form = this.fb.group({
    username: ['janedoe', Validators.required],
    password: ['passdeouf', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  get usernameControl() {
    return this.form.get('username') as FormControl;
  }

  get usernameControlInvalid() {
    return (
      this.usernameControl.hasError('required') && this.usernameControl.touched
    );
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.login.emit(value);
    }
  }
}
