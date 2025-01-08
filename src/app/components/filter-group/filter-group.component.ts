import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-group',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filter-group.component.html',
  styleUrl: './filter-group.component.css'
})
export class FilterGroupComponent {
  @Input() label!: string;
}
