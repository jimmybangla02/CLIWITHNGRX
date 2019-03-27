import { NgModule } from '@angular/core';
import {CounterModule} from './counter/counter.module';
import { MenuModule} from './menu/menu.module';

@NgModule({
    imports: [CounterModule, MenuModule],
    exports: [CounterModule, MenuModule]
})
export class CoreModule {}
