import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrduiComponent } from './crdui.component';

describe('CrduiComponent', () => {
  let component: CrduiComponent;
  let fixture: ComponentFixture<CrduiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrduiComponent]
    });
    fixture = TestBed.createComponent(CrduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
