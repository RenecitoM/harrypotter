import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHechizosComponent } from './page-hechizos.component';

describe('PageHechizosComponent', () => {
  let component: PageHechizosComponent;
  let fixture: ComponentFixture<PageHechizosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHechizosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHechizosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
