import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers/reducers';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule,
      ],
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create item-list component', () => {
    expect(component).toBeTruthy();
  });

  it('showedTodos has one item on init state', () => {
    expect(component.showedTodos.length).toEqual(1);
  });

  it('render item with correct title on init state', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li#_29e46mss1')
      .querySelector('div.titleWithNumber').textContent)
        .toEqual('0: Title');
  });
});
