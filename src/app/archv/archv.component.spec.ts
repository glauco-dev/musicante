import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchvComponent } from './archv.component';

describe('ArchvComponent', () => {
  let component: ArchvComponent;
  let fixture: ComponentFixture<ArchvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchvComponent]
    });
    fixture = TestBed.createComponent(ArchvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
