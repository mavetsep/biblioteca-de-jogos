import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJogoComponent } from './form-jogo.component';

describe('FormJogoComponent', () => {
  let component: FormJogoComponent;
  let fixture: ComponentFixture<FormJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
