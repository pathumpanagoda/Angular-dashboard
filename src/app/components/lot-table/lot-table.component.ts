import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { FileIconComponent } from '../file-icon/file-icon.component';
import { Lot } from '../../models/lot.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lot-table',
  standalone: true,
  imports: [CommonModule,StatusBadgeComponent,FileIconComponent,HttpClientModule],
  templateUrl: './lot-table.component.html',
  styleUrl: './lot-table.component.css'
})
export class LotTableComponent  {
  lots: Lot[] = []; // Initially empty array for lots
  filteredLots: Lot[] = []; // Initialize with all lots

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchLots();
  }

  // Fetch lot data from backend
  fetchLots() {
    this.http.get<Lot[]>('http://localhost:8185/api/lots') // Your backend endpoint
      .subscribe(
        (data: Lot[]) => {
          this.lots = data;
          this.filteredLots = [...this.lots]; // Initialize filtered lots with the fetched data
        },
        (error) => {
          console.error('Error fetching lots:', error);
        }
      );
  }

  applyFilters(filters: any) {
    this.filteredLots = this.lots.filter((lot) => {
      const matchesLotNo = filters.lotNo
        ? lot.lotNo.toLowerCase().includes(filters.lotNo.toLowerCase()) ||
          lot.lotTitle.toLowerCase().includes(filters.lotNo.toLowerCase())
        : true;
      const matchesZone = filters.zone === 'All' || lot.zone === filters.zone;
      const matchesStatus =
        filters.status === 'All' || lot.lotStatus === filters.status;
      const matchesEngineer =
        filters.engineer === 'All' ||
        lot.engineerResponsible === filters.engineer;
      const matchesSubcon =
        filters.subcon === 'All' || lot.subcontractor === filters.subcon;
      const matchesITP =
        filters.itpAssignTo === 'All' || lot.itpAssignTo === filters.itpAssignTo;
      const matchesWorkType =
        filters.workType === 'All' || lot.workType === filters.workType;
      const matchesDate =
        (!filters.workCommencedStart ||
          new Date(lot.workCommencedOn) >= new Date(filters.workCommencedStart)) &&
        (!filters.workCommencedEnd ||
          new Date(lot.workCommencedOn) <= new Date(filters.workCommencedEnd));

      return (
        matchesLotNo &&
        matchesZone &&
        matchesStatus &&
        matchesEngineer &&
        matchesSubcon &&
        matchesITP &&
        matchesWorkType &&
        matchesDate
      );
    });
  }
}