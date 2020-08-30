import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 import { from } from 'rxjs';
import {FundClass, StatusE} from "src/gmach/classes/fund-class";
import {FundServiceService} from "src/gmach/services/fund-service.service";
import {FriendsService} from "src/gmach/services/friends.service";


@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})

export class FundDetailsComponent implements OnInit {
 statusE=StatusE;
  key=Object.values;
  public fund:FundClass;
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>this.fund=this.FUndService.GETOne_ByName(String(res.get('name'))));

  }
  // getFundFriend():Friend[]
  // {
  //   return this.friendService.GetAll().filter(x=> x.funds.filter(y=>y=FundDetailsComponent.fund.id));

  // }

}