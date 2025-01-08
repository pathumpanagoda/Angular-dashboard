import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { FileIconComponent } from '../file-icon/file-icon.component';
import { Lot } from '../../models/lot.model';

@Component({
  selector: 'app-lot-table',
  standalone: true,
  imports: [CommonModule,StatusBadgeComponent,FileIconComponent],
  templateUrl: './lot-table.component.html',
  styleUrl: './lot-table.component.css'
})
export class LotTableComponent {
  lots: Lot[] = [
    {
      formId: 750,
      filePath: '@',
      lotNo: 'QWS-HHYT-7787-UUIUO-UU',
      lotTitle: 'Embankment Fill -89887-Layer 01',
      lotStatus: 'Draft',
      zone: 'Zone 7',
      workType: 'Permanent Works',
      engineerResponsible: 'Luan Almeida',
      subcontractor: 'Nader Barnanda',
      itpAssignTo: 'Nader Barnanda',
      workCommencedOn: '25/12/2024',
      workCompletedOn: '25/12/2024',
      lotClosedOn: '25/12/2024'
    },
    {
      formId: 751,
      filePath: '@',
      lotNo: 'QWS-ADRF-1234-POPLR-DC',
      lotTitle: 'Excavation for Foundation - 2154',
      lotStatus: 'Open',
      zone: 'Zone 3',
      workType: 'Temporary Works',
      engineerResponsible: 'Carlos Mendez',
      subcontractor: 'Global Excavators',
      itpAssignTo: 'Carlos Mendez',
      workCommencedOn: '15/01/2025',
      workCompletedOn: '15/03/2025',
      lotClosedOn: ''
    },
    {
      formId: 752,
      filePath: '@',
      lotNo: 'AKL-UIZT-3425-LOP-AASD',
      lotTitle: 'Concrete Pouring - 4311-Stage 2',
      lotStatus: 'Draft',
      zone: 'Zone 7',
      workType: 'Permanent Works',
      engineerResponsible: 'Hannah Lee',
      subcontractor: 'Concrete Masters',
      itpAssignTo: 'Nader Barnanda',
      workCommencedOn: '10/02/2025',
      workCompletedOn: '',
      lotClosedOn: ''
    },
    {
      formId: 753,
      filePath: '@',
      lotNo: 'WDF-OPLL-5517-KLQ-2345',
      lotTitle: 'Asphalt Paving - Roadway 45',
      lotStatus: 'Open',
      zone: 'Zone 7',
      workType: 'Permanent Works',
      engineerResponsible: 'Nader Barnanda',
      subcontractor: 'Road Builders Ltd',
      itpAssignTo: 'Hannah Lee',
      workCommencedOn: '01/03/2025',
      workCompletedOn: '',
      lotClosedOn: ''
    },
    {
      formId: 754,
      filePath: '@',
      lotNo: 'TP-STRB-1122-ROAD-HK',
      lotTitle: 'Foundation Reinforcement - Bridge 67',
      lotStatus: 'Open',
      zone: 'Zone 6',
      workType: 'Temporary Works',
      engineerResponsible: 'Luan Almeida',
      subcontractor: 'Bridge Builders Co.',
      itpAssignTo: 'Luan Almeida',
      workCommencedOn: '20/01/2025',
      workCompletedOn: '',
      lotClosedOn: ''
    },
    {
      formId: 755,
      filePath: '@',
      lotNo: 'ZN-DRW-9984-TIL-POI',
      lotTitle: 'Waterproofing - Basement Level 2',
      lotStatus: 'Draft',
      zone: 'Zone 2',
      workType: 'Permanent Works',
      engineerResponsible: 'Carlos Mendez',
      subcontractor: 'Waterproof Solutions',
      itpAssignTo: 'Carlos Mendez',
      workCommencedOn: '05/01/2025',
      workCompletedOn: '25/01/2025',
      lotClosedOn: '25/01/2025'
    },
    {
      formId: 756,
      filePath: '@',
      lotNo: 'PB-TRB-6553-KN-APR',
      lotTitle: 'Steel Reinforcement - Foundation Pillars',
      lotStatus: 'Draft',
      zone: 'Zone 8',
      workType: 'Temporary Works',
      engineerResponsible: 'Hannah Lee',
      subcontractor: 'Reinforce Ltd',
      itpAssignTo: 'Hannah Lee',
      workCommencedOn: '01/02/2025',
      workCompletedOn: '28/02/2025',
      lotClosedOn: '28/02/2025'
    }
  ];

  filteredLots: Lot[] = [...this.lots]; // Initialize with all lots

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
