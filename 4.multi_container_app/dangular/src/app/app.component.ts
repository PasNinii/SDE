import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Movie = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="entities$ | async as entities">
      <ul *ngFor="let entity of entities">
        <li>{{ entity.name }}</li>
      </ul>
    </ng-container>
  `,
})
export class AppComponent {
  entities$: Observable<Movie[]>;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.entities$ = this.http.get<Movie[]>(
      'http://localhost:3000/'
    );
  }

  get() {
    return of([{ id: 1, name: 'Lord of the rings' }, { id: 2, name: 'Harry Potter' }]);
  }
}
