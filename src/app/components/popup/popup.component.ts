import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PopupComponent {
  selectedFile: File | null = null;
  isUploading = false; // To show a loading indicator if needed

  constructor(
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

  // Save the selected file and send it to the backend
  onSave(): void {
    
  }

  // Cancel file selection
  onCancel(): void {
    this.dialogRef.close();
  }
}
