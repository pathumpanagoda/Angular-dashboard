import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true,
  imports: [HttpClientModule,]
})
export class PopupComponent {
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Handle file selection
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Save the selected file
  onSave(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http
        .post('http://localhost:8185/api/lots/upload', formData)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully:', response);
            this.dialogRef.close(response);
          this.onCancel();
          this.reloadPage();
          },
          (error) => {
            console.error('Error uploading file:', error);
          }
        );
    }
  }
  reloadPage() {
    throw new Error('Method not implemented.');
  }

  // Cancel file selection
  onCancel(): void {
    this.dialogRef.close();
  }
}
