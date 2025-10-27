import { Component, computed, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../../models/category';

@Component({
  selector: 'app-upload',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
  standalone: true
})
export class UploadComponent implements OnInit {
uploadForm = signal<FormGroup>(new FormGroup({}));
categories = signal<Category[]>([]);
selectedFile = signal<File | null>(null);
isUploading = signal<boolean>(false);

//computed signals
isFormValid = computed(() => this.uploadForm().valid && this.selectedFile() !== null && !this.isUploading());

/**
 *
 */
constructor(private fb:FormBuilder) {
  this.uploadForm.set(this.fb.group({
    title:['',Validators.required],
    description:[''],
    categories: [[]]
  }));
  
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
onSubmit() {
  throw new Error('Method not implemented.');
}

onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
}
