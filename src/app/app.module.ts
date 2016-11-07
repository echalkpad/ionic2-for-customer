import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AgreementPage} from '../pages/agreement/agreement';
import {LoginPage} from '../pages/login/login';
import {MyPraisePage} from '../pages/myPraise/myPraise';
import {SMSLoginPage} from '../pages/smsLogin/smsLogin';
import {PopoverPage} from '../pages/myPraise/myPraise';
// import {Tab4Page} from '../pages/tab4/tab4';
// import {Tab5Page} from '../pages/tab5/tab5';
// import {Tab2Page} from '../pages/tab2/tab2';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgreementPage,
    LoginPage,
    MyPraisePage,
    SMSLoginPage,
    PopoverPage,
    // Tab4Page,
    // Tab5Page,
    // Tab2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgreementPage,
    LoginPage,
    MyPraisePage,
    SMSLoginPage,
    PopoverPage,
    // Tab4Page,
    // Tab5Page,
    // Tab2Page
  ],
  providers: []
})
export class AppModule {}
