import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonObjectComponent } from './json-object.component';

describe('JsonObjectComponent', () => {
  let component: JsonObjectComponent;
  let fixture: ComponentFixture<JsonObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
