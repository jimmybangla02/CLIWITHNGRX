import { Injectable, OnInit} from '@angular/core';
import { APIService } from '../api/api.service';
import { MainMenu, Menu } from './menu.model';
import { Store} from '@ngrx/store';
import { AppState } from '../store/app.store';
import { GetMenu } from './menu.action';

@Injectable({
    providedIn: 'root'
})

export class MenuService implements OnInit {

    constructor(private api: APIService, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.getMenus('sn');
    }

    getMenus(id: string): void {
        this.api.get({path: '/assets/fake-data/get.json'}).subscribe((s: Menu[]) => {
            const res: MainMenu = { id, menu: s };
            this.store.dispatch(new GetMenu(res));
        });
    }
}
