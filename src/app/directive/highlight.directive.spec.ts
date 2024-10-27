import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<div appHighlight [appHighlight]="capacity"></div>`
})
class TestComponent {
  capacity: number = 600; // Changer la valeur en fonction de vos besoins
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  

  it('should apply highlight when capacity is greater than 500', () => {
    testComponent.capacity = 600; // Mettez une capacité supérieure à 500 ici
    fixture.detectChanges();

    const highlightedElement = fixture.debugElement.nativeElement.querySelector('div');
    expect(highlightedElement.style.backgroundColor).toBe('lightgreen');
  });

  it('should remove highlight when capacity is not greater than 500', () => {
    testComponent.capacity = 400; // Mettez une capacité inférieure à 500 ici
    fixture.detectChanges();

    const highlightedElement = fixture.debugElement.nativeElement.querySelector('div');
    expect(highlightedElement.style.backgroundColor).toBeFalsy();
  });
});
