import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
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
    lostClosedEnd: '',
    all: false,
  };

  // Output event to send filter data to parent
  @Output() filterApplied = new EventEmitter<any>();

  ngOnInit(): void {
    // Set current date as the default value for all date fields
    const currentDate = new Date().toISOString().split('T')[0];
    this.filters.workCommencedStart = currentDate;
    this.filters.workCommencedEnd = currentDate;
    this.filters.workCompletedStart = currentDate;
    this.filters.workCompletedEnd = currentDate;
    this.filters.lostClosedStart = currentDate;
    this.filters.lostClosedEnd = currentDate;
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
      lostClosedEnd: '',
      all: false,
    };
    this.filterApplied.emit(this.filters);
  }
}
