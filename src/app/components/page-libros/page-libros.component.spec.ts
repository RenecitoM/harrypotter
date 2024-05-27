import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLibrosComponent } from './page-libros.component';

describe('PageLibrosComponent', () => {
  let component: PageLibrosComponent;
  let fixture: ComponentFixture<PageLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
