import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

import { MailService } from './mail-service.service';
import { NewMember } from './member.model';
import { ImageService } from './image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  ExcelData: any;

  constructor(
    private mailService: MailService,
    private imageService: ImageService
  ) {}

  SendMail(): void {
    const formData = new FormData(); // Tạo đối tượng FormData để gửi file
    formData.append(
      'data.json',
      new Blob([JSON.stringify(this.ExcelData)], { type: 'application/json' })
    );

    for (const employee of this.ExcelData) {
      if (employee.imageFile) {
        const uploadedFile = this.imageService
          .uploadImage(employee.imageFile)
          .subscribe(
            (file: File) => {
              formData.append('image', file);
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
    }

    this.mailService.sendMail(formData).subscribe(
      () => {
        alert('Mail sent successfully!');
      },
      (error) => {
        alert('Error sending mail: ' + error.message);
      }
    );
  }

  uploadImage(event: any, employee: NewMember) {
    const file = event.target.files[0];
    const uploadedFile = this.imageService.uploadImage(file).subscribe(
      (file: File) => {
        employee.ImageFile = file;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      console.log(this.ExcelData);
    };
  }
}
