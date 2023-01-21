import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountPage } from '../account/account.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {
  emails = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.http.get<any[]>('https://devdactic.fra1.digitaloceanspaces.com/gmail/data.json').subscribe(res=>{
      this.emails = res.map(email => {
        email.color = this.intoRGB(this.hashCode(email.from));
        return email;
      });
      console.log(this.emails);
    });

  }

  async openAccount(ev: any){
    const popover = await this.popoverCtrl.create({
      component: AccountPage,
      event: ev,
      cssClass: 'custom-popover'
    });
    await popover.present();
  }
  openDetail(id){
    this.router.navigate(['tabs','mail',id]);
  }
  handleRefresh(ev){
setTimeout(()=>{
  ev.target.complete();
},2000);
  }

  private hashCode(str){
    let hash = 0;
    for(let i = 0;i < str.length ; i++){
      // eslint-disable-next-line no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intoRGB(i){
    // eslint-disable-next-line no-bitwise
    const c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }

}
