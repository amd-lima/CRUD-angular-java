import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable <Course[]>;
  displayedColumns = ['name','category','actions'];

  constructor(
    private coursesService: CursesService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
    ){
    this.courses$ = this.coursesService.list()
    .pipe(
          catchError(error => {
            this.onError('Erro ao carregar cursos!');
            return ([])
          })
        );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void{

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log('onAdd')
  }
}
