import { Injectable, OnInit} from '@angular/core';
import { APIService } from '../api/api.service';
import { Menu } from './menu.model';
import { MenuAddOne} from './menu.action';
import { Store} from '@ngrx/store';
import { AppState } from '../store/app.store';

@Injectable({
    providedIn: 'root'
})

export class MenuService implements OnInit {

    constructor(private api: APIService, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.getMenus('Menu');
    }

    getMenus(id: string): void {
        this.api.get({path: '/assets/fake-data/get.json'}).subscribe((s: Menu) => {
            s.id = id;
            this.store.dispatch(new MenuAddOne(s));
        });
    }
}
