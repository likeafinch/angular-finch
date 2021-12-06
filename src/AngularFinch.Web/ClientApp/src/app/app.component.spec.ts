import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CoreModule } from './core';
import { MockAppService } from '../../__mocks__/MockAppService';

describe('AppComponent', () => {
  let fixture;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          CoreModule.forRoot(),
          OAuthModule.forRoot(),
          NoopAnimationsModule,
          RouterTestingModule.withRoutes([])
        ],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: AppService, useClass: MockAppService },
          { provide: 'BASE_URL', useValue: 'http://mock.com' },
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should be created without error',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it('snapshot created successfully', () => {
    expect(fixture).toMatchSnapshot();
  });

});
