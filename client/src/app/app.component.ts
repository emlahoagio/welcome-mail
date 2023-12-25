import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

import { MailService } from './mail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  ExcelData: any;

  constructor(private mailService: MailService) {}

  SendMail(): void {
    const jsonData = JSON.stringify(this.ExcelData); // Chuyển đổi dữ liệu JSON thành chuỗi
    const excelData = new File([jsonData], 'data.json'); // Tạo đối tượng File

    this.mailService.sendExcelData(excelData).subscribe(
      () => {
        alert('Mail sent successfully!');
      },
      (error) => {
        alert('Error sending mail: ' + error.message);
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
