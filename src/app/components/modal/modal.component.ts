import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { rearrangeId } from 'src/app/helpers/utils';
import Pokemon from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  data: Pokemon;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public modalData: Pokemon) {
    this.data = modalData; 
  }

  closeModal() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

  rearrangeId(id: number) {
    return rearrangeId(id);
  }
}