import { Component } from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import { NavController,NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
// import {Tab4Page} from '../tab4/tab4';
// import {Tab5Page} from '../tab5/tab5';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  canGoBack = this.router.canGoBack;

  constructor(public navCtrl: NavController,private router: Router, private params: NavParams) {

  }

  goBack() {
    this.router.popSafe();
  }

  // goTab1() {
  //   this.router.push(HomePage,{},{duration: 0})
  // }
  //
  // goTab2() {
  //   this.router.push(AboutPage,{},{duration: 0})
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
