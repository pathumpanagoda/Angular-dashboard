export interface Lot {
  formId: number;
  filePath: string;
  lotNo: string;
  lotTitle: string;
  lotStatus: 'Draft' | 'Open';
  zone: string;
  workType: 'Permanent Works' | 'Temporary Works';
  engineerResponsible: string;
  subcontractor: string;
  itpAssignTo: string;
  workCommencedOn: string;
  workCompletedOn?: string;
  lotClosedOn?: string;
  
  // Optional filter fields
  workCommencedStart?: string; // For filtering by work commenced date range
  workCommencedEnd?: string;   // For filtering by work commenced date range
  workCompletedStart?: string; // For filtering by work completed date range
  workCompletedEnd?: string;   // For filtering by work completed date range
  lostClosedStart?: string;    // For filtering by lost closed date range
  lostClosedEnd?: string;      // For filtering by lost closed date range
  lotNoFilter?: string;        // For filtering by lot number or title
  zoneFilter?: string;         // For filtering by zone
  statusFilter?: 'All' | 'Draft' | 'Open'; // For filtering by status
  engineerFilter?: string;     // For filtering by engineer
  subconFilter?: string;       // For filtering by subcontractor
  itpAssignToFilter?: string;  // For filtering by ITP assigned to
  workTypeFilter?: 'All' | 'Permanent Works' | 'Temporary Works'; // For filtering by work type
}
