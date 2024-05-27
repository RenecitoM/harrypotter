import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonajesComponent } from './page-personajes.component';

describe('PagePersonajesComponent', () => {
  let component: PagePersonajesComponent;
  let fixture: ComponentFixture<PagePersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
