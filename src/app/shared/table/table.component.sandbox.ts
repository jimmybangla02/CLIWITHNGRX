import { sandboxOf } from 'angular-playground';
import { TableComponent } from './table.component';

export default sandboxOf(TableComponent)
  .add('default', {
    template: `<app-table></app-table>`
  });
