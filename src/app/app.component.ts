import {Component, OnInit} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pedidos-bootcamp';
  displaySideBar = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getMostrar$().subscribe(val => this.displaySideBar = val);
  }

  ngOnInit(): void {
    // this.sidebarService.setMostrar(true);
  }

  abrirFecharMenu() {
    this.sidebarService.setMostrar(!this.displaySideBar);
  }
}
