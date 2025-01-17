import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  showPopup = false;
  selectedFile: File | null = null;
  previewData: any[] | null = null;

  constructor(private http: HttpClient) {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedFile = null;
    this.previewData = null;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        // Here, send the file to backend for parsing or process locally.
        this.previewData = this.parseExcelFile(data); // Example method
      };
      reader.readAsBinaryString(this.selectedFile);
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:8080/api/lots/import', formData).subscribe({
        next: (response) => {
          alert('File uploaded successfully!');
          this.closePopup();
        },
        error: (err) => {
          alert('Error uploading file: ' + err.message);
        },
      });
    }
  }

  parseExcelFile(data: any): any[] {
    // Optional: Implement Excel parsing logic for preview.
    return [];
  }
}
