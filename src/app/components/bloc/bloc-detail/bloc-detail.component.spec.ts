import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocDetailComponent } from './bloc-detail.component';

describe('BlocDetailComponent', () => {
  let component: BlocDetailComponent;
  let fixture: ComponentFixture<BlocDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
