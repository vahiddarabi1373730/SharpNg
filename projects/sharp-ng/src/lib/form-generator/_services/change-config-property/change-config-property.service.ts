import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ChangeConfigInterface<T = null> {
  name: string;
  property: any;
  newValue: T;
}

@Injectable({
  providedIn: 'root',
})
export class ChangeConfigPropertyService {
  constructor() {}

  public change = new Subject<ChangeConfigInterface<any>>();
}
