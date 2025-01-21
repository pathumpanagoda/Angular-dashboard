import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'], // Corrected property
  imports: [CommonModule, FormsModule],
  standalone: true,
})

export class HeaderFiltersComponent {
  // Filter values object
  filters = {
    workCommencedStart: '',
    workCommencedEnd: '',
    workCompletedStart: '',
    workCompletedEnd: '',
    lostClosedStart: '',
    lostClosedEnd: ''
  };

  // Output event to send filter data to parent
  @Output() filterApplied = new EventEmitter<any>();

  ngOnInit(): void {
    // Set current date as the default value for all date fields
    const currentDate = new Date().toISOString().split('T')[0];
  }

  // Method to apply filters
  applyFilters() {
    this.filterApplied.emit(this.filters);
  }

  // Optional: Reset all filter values
  resetFilters() {
    this.filters = {
      workCommencedStart: '',
      workCommencedEnd: '',
      workCompletedStart: '',
      workCompletedEnd: '',
      lostClosedStart: '',
      lostClosedEnd: ''
    };
    this.filterApplied.emit(this.filters);
  }
  constructor(private dialog: MatDialog) {}

  // Method to open the popup
  openPopup(): void {
    this.dialog.open(PopupComponent, {
      width: '400px', // Set the width of the popup
      data: {} // Pass any data you want to the popup component
    });
  }

  //Delete file method
  deleteFile(): void {
    // Your delete file logic here
    
  }
}