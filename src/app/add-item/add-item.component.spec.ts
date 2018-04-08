import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers/reducers';
import { RouterTestingModule } from '@angular/router/testing';

import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule,
      ],
      declarations: [ AddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create add-item component', () => {
    expect(component).toBeTruthy();
  });

  it('has correct init value for validationClass and validationContextClass', () => {
    expect(component.validationClass).toEqual('not-valid');
    expect(component.validationContextClass).toEqual('not-valid');
  });

  it('set valid class for validationClass if value has more than 5 characters', () => {
    component.value = '123456';
    component.onValueChanged();
    expect(component.validationClass).toEqual('valid');
  });

  it('set valid class for validationContextClass if value has more than 20 characters', () => {
    component.contentValue = 'qwertyuiopasdfghjkldf';
    component.onContentValueChanged();
    expect(component.validationContextClass).toEqual('valid');
  });
});
