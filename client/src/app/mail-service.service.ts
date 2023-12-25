import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(formData: FormData): Observable<any> {
    const apiUrl = 'http://your-backend-api/send-excel-data'; // Thay thế bằng API endpoint thực tế
    return this.http.post<any>(apiUrl, formData);
  }
}
