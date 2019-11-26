import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoitemFormComponent } from './pedidoitem-form.component';

describe('PedidoitemFormComponent', () => {
  let component: PedidoitemFormComponent;
  let fixture: ComponentFixture<PedidoitemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoitemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
