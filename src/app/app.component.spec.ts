import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularDelegate, ModalController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { Article } from './models/Article';
import { AlertService } from './services/alert.service';
import { StorageService } from './services/storage.service';
import { UtilityService } from './services/utility.service';

describe('AppComponent', () => {
  let alertService: AlertService;
  let storageService: StorageService;
  let util: UtilityService;

  beforeEach(waitForAsync(() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [
        ModalController,
        AngularDelegate
      ]
    }).compileComponents();
    alertService = TestBed.inject(AlertService);
    storageService = TestBed.inject(StorageService);
    util = TestBed.inject(UtilityService);
    storageService.setObject('basket', {});
    storageService.setObject('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo4MDgwL2lzc3VlciIsInVwbiI6InF1ZW50aW4uYWxlZ29zQGdtYWlsLmNvbSIsImdyb3VwcyI6WyJhZG1pbiJdLCJkdXJhdGlvbiI6MzYwMCwiZW1haWwiOiJxdWVudGluLmFsZWdvc0BnbWFpbC5jb20iLCJpZCI6Mywicm9sZSI6ImFkbWluIiwiaWF0IjoxNjIyNDYxODkyLCJleHAiOjE2MjI0NjIxOTIsImp0aSI6IjA1MWE1OTk4LWZhNzEtNDZiYi04NjYxLTI2OWU3NjZlNDhmZSJ9.UEkxGnkmfRZt9vH64i4CS5wyK-d9s0W_PFUeMyrTsKNg-9qYA7PT1cqOekjgUzA9JPDC8BDroM63mf4nuIdMUEjAl7CPSN_MyBezVRxHx9sH0-KmPXbO_uFlY46M3sS1FFyv68xfp0i39KtGPTvbgYZTxWnQKXk4YWluNJOOef_19kroBkm1qbk0ZkZbGo1lGiwakrsDX-IvB69eulQJOTPZW8DP29IMo9kXvNQRvnPhj2nAWHcAM_uwEgGHoEZomnKqhtrTW9TpWPd4Yx9T-iTZyvMVfOlWhn3P1LvkAvNtWexvECBd3yCct7OZEubk9VuMJ7YnCmtcX4hB-Z6DMA');
    util.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo4MDgwL2lzc3VlciIsInVwbiI6InF1ZW50aW4uYWxlZ29zQGdtYWlsLmNvbSIsImdyb3VwcyI6WyJhZG1pbiJdLCJkdXJhdGlvbiI6MzYwMCwiZW1haWwiOiJxdWVudGluLmFsZWdvc0BnbWFpbC5jb20iLCJpZCI6Mywicm9sZSI6ImFkbWluIiwiaWF0IjoxNjIyNDYxODkyLCJleHAiOjE2MjI0NjIxOTIsImp0aSI6IjA1MWE1OTk4LWZhNzEtNDZiYi04NjYxLTI2OWU3NjZlNDhmZSJ9.UEkxGnkmfRZt9vH64i4CS5wyK-d9s0W_PFUeMyrTsKNg-9qYA7PT1cqOekjgUzA9JPDC8BDroM63mf4nuIdMUEjAl7CPSN_MyBezVRxHx9sH0-KmPXbO_uFlY46M3sS1FFyv68xfp0i39KtGPTvbgYZTxWnQKXk4YWluNJOOef_19kroBkm1qbk0ZkZbGo1lGiwakrsDX-IvB69eulQJOTPZW8DP29IMo9kXvNQRvnPhj2nAWHcAM_uwEgGHoEZomnKqhtrTW9TpWPd4Yx9T-iTZyvMVfOlWhn3P1LvkAvNtWexvECBd3yCct7OZEubk9VuMJ7YnCmtcX4hB-Z6DMA';
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

/*   it('should have menu labels', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(0);
  }));

  it('should have urls', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(0);
  }));
 */
});
