import { sandboxOf } from 'angular-playground';
import { DropdownComponent } from './dropdown.component';

export default sandboxOf(DropdownComponent)
  .add('default', {
    template: `<app-dropdown></app-dropdown>`
  });
