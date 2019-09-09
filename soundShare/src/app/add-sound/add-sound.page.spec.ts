import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoundPage } from './add-sound.page';

describe('AddSoundPage', () => {
  let component: AddSoundPage;
  let fixture: ComponentFixture<AddSoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
