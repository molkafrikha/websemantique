import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerDetailComponent } from './foyer-detail.component';

describe('FoyerDetailComponent', () => {
  let component: FoyerDetailComponent;
  let fixture: ComponentFixture<FoyerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
