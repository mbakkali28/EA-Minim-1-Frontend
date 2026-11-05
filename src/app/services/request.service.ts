import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { RequestListParams, RequestsPage } from '../models';
import { buildListParams } from '../utils/list-params';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/requests`;

  /** GET /requests **/
  getRequests(params: RequestListParams = {}): Observable<RequestsPage> {
    return this.http.get<RequestsPage>(this.baseUrl, { params: buildListParams(params) });
  }
}
