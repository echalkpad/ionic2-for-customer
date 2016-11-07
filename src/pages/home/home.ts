import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Router} from 'emiya-ionic2-router';
import {MyPraisePage} from '../myPraise/myPraise';
import {AboutPage} from '../about/about';
import { ContactPage } from '../contact/contact';
// import { Tab4Page } from '../tab4/tab4';
// import { Tab5Page } from '../tab5/tab5';
// import { Tab2Page } from '../tab2/tab2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   selected_index:number = 0;
  private mySlideOptions:any;
  constructor(public navCtrl: NavController, private router: Router) {
    this.mySlideOptions = {
      initialSlide: 1,
      loop: true,
      autoplay: 1000,
    }
  }

  goMyPraise() {
    this.router.push(MyPraisePage);
  }

  goMemberPage() {
    this.router.push(AboutPage);
  }

  goTab1() {
    // this.router.push(HomePage,{},{duration: 0})
    this.selected_index = 0;
  }

  goTab2() {
    // this.router.push(Tab2Page,{},{duration: 0});
    this.selected_index = 1;
  }

  goTab3() {
    // this.router.push(ContactPage,{},{duration: 0});
    this.selected_index = 2;
  }

  goTab4() {
    // this.router.push(Tab4Page,{},{duration: 0});
    this.selected_index = 3;
  }

  goTab5() {
    // this.router.push(Tab5Page,{},{duration: 0});
    this.selected_index = 4;
  }
}
