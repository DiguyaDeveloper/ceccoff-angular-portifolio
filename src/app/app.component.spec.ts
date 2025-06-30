import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@organisms/header/header.component';
import { FooterComponent } from '@organisms/footer/footer.component';
import { MockComponents } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, MockComponents(HeaderComponent, FooterComponent)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
