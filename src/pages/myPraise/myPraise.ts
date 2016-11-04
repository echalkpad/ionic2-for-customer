/**
 * Created by zhuzhui on 2016/11/2.
 */

import {Component} from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {PopoverController,ViewController} from 'ionic-angular';

@Component({
    templateUrl: 'myPraise.html',
})

export class MyPraisePage{
    constructor(private router: Router,private popoverCtrl: PopoverController){

    }

    goBack() {
        this.router.popSafe();
    }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{},{cssClass:'popover-style',enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    }).then(() => {
      document.getElementsByTagName('ion-backdrop')[0]['onclick'] = () => {
        popover.dismiss(undefined, undefined, {duration: 0, animate: false})
      }
    });
  }
}


@Component({
  templateUrl:'../dateTime/dateTime.html',
})

export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss(undefined, undefined, {duration: 0, animate: false});
  }
}
