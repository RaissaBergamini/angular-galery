import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { GaleryComponent } from './gallery.component';

describe('GaleryComponent', () => {
  let component: GaleryComponent;
  let fixture: ComponentFixture<GaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
