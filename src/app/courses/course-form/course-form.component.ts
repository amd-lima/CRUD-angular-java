import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from '../model/course';
import { CursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
   this.service.save(this.form.value).subscribe({
    next: (data) => console.log(data),
    error: () => {
      this.onError();
 },
});
   console.log(this.form.value)
  }

  onCancel() {}

  private onError() {
    this.snackBar.open('Erro ao salvar o curso =/', '', { duration: 5000 });
  }
}
