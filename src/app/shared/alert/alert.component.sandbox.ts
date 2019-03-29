import { sandboxOf } from 'angular-playground';
import { AlertComponent } from './alert.component';

export default sandboxOf(AlertComponent)
  .add('default', {
    template: `<app-alert></app-alert>`
  });
