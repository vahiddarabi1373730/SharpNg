import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { KeyValueInterface } from '../../../../../_core/_models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormGroupService {
  constructor() {}

  public deleteFormGroup = new Subject<KeyValueInterface>();
}
