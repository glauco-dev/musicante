import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotecardComponent } from './votecard.component';

describe('VotecardComponent', () => {
  let component: VotecardComponent;
  let fixture: ComponentFixture<VotecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotecardComponent]
    });
    fixture = TestBed.createComponent(VotecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
