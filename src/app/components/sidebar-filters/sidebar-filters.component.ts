import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class SidebarFiltersComponent {
  // Filter values object
  filters = {
    lotNo: '',
    workCommencedStart: '',
    workCommencedEnd: '',
    zone: 'All',
    status: 'All',
    engineer: 'All',
    subcon: 'All',
    itpAssignTo: 'All',
    workType: 'All',
  };

  // Output event to send filter data to parent
  @Output() filterApplied = new EventEmitter<any>();

  // Set current date as the default value for all date fields
  ngOnInit(): void {
  const currentDate = new Date().toISOString().split('T')[0];
  // this.filters.workCommencedStart = currentDate;
  // this.filters.workCommencedEnd = currentDate;
  }

  // Method to handle the filter changes
  applyFilters() {
    this.filterApplied.emit(this.filters);
  }

  // Optional: Reset all filter values
  resetFilters() {
    this.filters = {
      lotNo: '',
      workCommencedStart: '',
      workCommencedEnd: '',
      zone: 'All',
      status: 'All',
      engineer: 'All',
      subcon: 'All',
      itpAssignTo: 'All',
      workType: 'All',
    };
    this.filterApplied.emit(this.filters);
  }
}
