import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GuardService } from 'src/app/services/guard.service';
import { UtilityService } from 'src/app/services/utility.service';

import { OrderPage } from './order.page';

describe('OrderPage', () => {
  let component: OrderPage;
  let fixture: ComponentFixture<OrderPage>;
  let guardService: GuardService;
  let util: UtilityService;
  let auth: AuthService;

  beforeEach(waitForAsync(async () => {
    TestBed.configureTestingModule({
      declarations: [ OrderPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule]
    }).compileComponents();
    guardService = TestBed.inject(GuardService);
    fixture = TestBed.createComponent(OrderPage);
    component = fixture.componentInstance;
    util = TestBed.inject(UtilityService);
    auth = TestBed.inject(AuthService);
    util.token = await auth.login('quentin.alegos@gmail.com', 'hHxL3zXapXz3JWW').toPromise();


    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
