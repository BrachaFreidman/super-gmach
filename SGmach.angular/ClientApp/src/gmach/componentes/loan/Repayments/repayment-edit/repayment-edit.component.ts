import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Repayment } from 'src/gmach/classes/repayment';
import { LoanService } from 'src/gmach/services/loan.service';
import { validation } from 'src/ts/Validation';

@Component({
  selector: 'app-repayment-edit',
  templateUrl: './repayment-edit.component.html',
  styleUrls: ['./repayment-edit.component.css'],
  providers: [DatePipe]
})
export class RepaymentEditComponent implements OnInit {
  repayment: Repayment
  RepaymentF: FormGroup;
  message = { title: '', body: '', href: '', buttonText: "שמור ", click: "this.save()" };
  Repayment: any;

  constructor(private LoanService: LoanService, private activateRoute: ActivatedRoute, private DatePipe: DatePipe) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(res => {
      var id = res.get('id');
      this.LoanService.getRepaymentById(id).subscribe(r => {
        this.repayment = <Repayment>r;
        this.RepaymentF = new FormGroup({
          userName: new FormControl(this.repayment.userName),
          date: new FormControl(this.DatePipe.transform(this.repayment.date, "yyyy-MM-dd")),
          remark: new FormControl(this.repayment.remark),
          // status: new FormControl(this.repayment.loan_status),
          amount: new FormControl(this.repayment.amount),
          id: new FormControl(this.repayment.id),
        })
      })

    })

  }
  save(event) {
    if (event.target.id != "Add-B") {
      return
    }
    validation();
  var  SaveR:Repayment = new Repayment();
    SaveR.amount = this.RepaymentF.get('amount').value;
    SaveR.date = this.RepaymentF.get('date').value;
    SaveR.remark = this.RepaymentF.get('remark').value;
    // SaveR.status = this.RepaymentF.get('status').value;
    SaveR.LoanID = this.repayment.loanID;
    SaveR.UserId = this.repayment.userId;
    SaveR.id=this.repayment.id;
    // SaveR.UserName = this.RepaymentF.get('UserName').value;
//SaveR.UserId = this.RepaymentF.get('userId').value;

    this.LoanService.UpdateRepayment(SaveR).subscribe(
        {
          next: data => {
            debugger
            this.message.title = "ההוצאה נוספה בהצלחה";
            this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההוצאות לחץ אישור";
            this.message.href = "patty_cash/Expnditure/List";
          },
          error: error =>{
            this.message.title = "יש תקלה בהוספה";
            this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
            this.message.href = "patty_cash/Expnditure/List";
          }
        }
      );;;
    //SaveR.numRepayment = this.RepaymentF.get('numRepayment').value
   // SaveR.loan_status = this.RepaymentF.get('loan_status').value;
    //console.log(SaveR);

  }
}
