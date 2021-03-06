import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNotificationsComponent } from './client-notifications.component';

describe('ClientNotificationsComponent', () => {
  let component: ClientNotificationsComponent;
  let fixture: ComponentFixture<ClientNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
