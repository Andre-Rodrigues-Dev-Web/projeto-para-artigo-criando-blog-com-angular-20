import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLogo } from './content-logo';

describe('ContentLogo', () => {
  let component: ContentLogo;
  let fixture: ComponentFixture<ContentLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
