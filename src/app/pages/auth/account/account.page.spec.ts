import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

import { AccountPage } from './account.page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;
  let util: UtilityService;
  let auth: AuthService;
  beforeEach(waitForAsync(async () => {
    TestBed.configureTestingModule({
      declarations: [ AccountPage ],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();
    util = TestBed.inject(UtilityService);
    auth = TestBed.inject(AuthService);
    util.token = await auth.login('quentin.alegos@gmail.com', 'hHxL3zXapXz3JWW').toPromise();
    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
