import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()

export class SidebarService implements OnDestroy {

  private topicoMostraSidebar = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  getMostrar$(): Observable<boolean> {
    return this.topicoMostraSidebar.asObservable();
  }

  setMostrar(mostrar: boolean): void {
    this.topicoMostraSidebar.next(mostrar);
  }

  ngOnDestroy(): void {
    this.topicoMostraSidebar.unsubscribe();
  }
}
