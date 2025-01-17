import { SidebarFiltersComponent } from './../sidebar-filters/sidebar-filters.component';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { LotTableComponent } from '../lot-table/lot-table.component';
import { HeaderFiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, SidebarFiltersComponent, LotTableComponent, HeaderFiltersComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'], // Corrected from 'styleUrl'
})
export class MainLayoutComponent {
  @ViewChild('lotTable') lotTable!: LotTableComponent; // Using @ViewChild for better type safety

  applyFilters(filterData: any) {
    // Ensure the lotTable component has a method called applyFilters
    if (this.lotTable) {
      this.lotTable.applyFilters(filterData);
    }
  }
}
