import { Component, OnInit } from '@angular/core';
import { ExpenditureService } from 'src/gmach/services/expenditure.service';
import { Expenditure } from 'src/gmach/classes/expenditure';

import { ExportExcelService } from 'src/gmach/services/export-excel.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list-expenditure',
  templateUrl: './list-expenditure.component.html',
  styleUrls: ['./list-expenditure.component.scss'],
  providers: [DatePipe]
})
export class ListExpenditureComponent implements OnInit {
  [x: string]: any;
  rowSelection = 'multiple';
  search;
  Expenditures: Expenditure[] = [];
  defaultColDef = {
    resizable: true,
    sortable: true,
  };

    columnDefs= [{
      headerName: 'מזהה', field: 'id', maxWidth: "80", minWidth: "80",
      cellRenderer: function (params) {
        return `<a href='/patty_cash/Expenditure/${params.data.id}'> ${params.data.id}</a>`
      }
    },
    { headerName: 'סטטוס', field: 'status', maxWidth: "90", minWidth: "90"},
    { headerName: 'מטרה', field: 'purpose' },
    { headerName: 'סכום', field: 'amount' },
    { headerName: 'מקבל', field: 'Receives' },
    { headerName: 'תאריך ביצוע', field: 'Date' }
    ]
  
  rowData = [];
  constructor(private ExService: ExpenditureService,private exportService: ExportExcelService ,
    public datepipe: DatePipe
    ) { }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //diving coluom % to the tabel 
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }


  addDATA() {

   
      this.rowData = this.Expenditures.map(ex => {
      var  date=ex.date;
        return {
          id: ex.id, 
           status:ex.status?ex.status.description:null,
           purpose: ex.purpose,
          amount: ex.amount, 
          Receives: ex.receives,       
          Date: this.datepipe.transform(date,'dd/MM/yyyy')
        }
      })
    // this.grid.refresh();
  }
  // GetDate(ex: Expenditure) {
  //   switch (ex.status.Name) {
  //     // case "future": return this.datepipe.transform(ex.future_date, 'dd-MM-yyyy');
  //     // case "performed": return this.datepipe.transform(ex.real_date, 'dd-MM-yyyy');
  //   }
  //   return "00/00/00";
  // }
  ngOnInit(): void {
    this.ExService.Get().subscribe(x => {
      this.Expenditures = <Expenditure[]>x,
        console.log(x),
        this.addDATA();
    },
      _err => {
        console.log(console.error());
      }
    )
    debugger
    this.addDATA();
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }
  exportExcel()
  {
    this.exportService.exportExcel(this.rowData, 'expenditure');
  }
}
