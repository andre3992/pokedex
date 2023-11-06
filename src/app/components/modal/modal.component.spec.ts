import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: { closeAll: () => {} } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the modal', inject([MatDialog], (dialog: MatDialog) => {
    spyOn(dialog, 'closeAll');
    component.closeModal();
    expect(dialog.closeAll).toHaveBeenCalled();
  }));

  it('should rearranged ID', () => {
    const testId = 25;
    component.data = { id: testId };
    fixture.detectChanges();

    const idElement = fixture.debugElement.query(By.css('.ID'));
    expect(idElement.nativeElement.textContent).toContain(component.rearrangeId(testId));
  });
});