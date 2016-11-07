import { Component } from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {MyPraisePage} from '../myPraise/myPraise';
import {Token} from 'emiya-angular2-token';
import {Event} from 'emiya-angular2-event';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
// import {Tab4Page} from '../tab4/tab4';
// import {Tab5Page} from '../tab5/tab5';
// import {Tab2Page} from '../tab2/tab2';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public hasUuid:any;
  constructor(private router: Router) {
    this.getEvent();
  }

  ionViewDidEnter(){
    this.hasUuid = Token.has('uuid');
  }

  goMyPraise() {
    this.router.push(MyPraisePage);
  }

  goIonic2() {
    this.router.push('/agreement');
  }

  logout() {
    Token.clearAll();
    this.hasUuid = false;
  }

  getEvent() {
    Event.subscribe('loginSuccess',this.show.bind(this));
  }

  show() {
    this.hasUuid = Token.has('uuid');
  }

  // goTab1() {
  //   this.router.push(HomePage,{},{duration: 0})
  // }
  //
  // goTab2() {
  //   this.router.push(Tab2Page,{},{duration: 0})
  // }
  //
  // goTab3() {
  //   this.router.push(ContactPage,{},{duration: 0})
  // }
  //
  // goTab4() {
  //   this.router.push(Tab4Page,{},{duration: 0})
  // }
  //
  // goTab5() {
  //   this.router.push(Tab5Page,{},{duration: 0})
  // }
}
