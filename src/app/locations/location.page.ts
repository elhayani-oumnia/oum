import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
public  locations:Array<Place>;
  constructor(private  locationService:LocationsService, private  router:Router,
              private alertCtrlr:AlertController) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.onGetLocations();
  }

  onNewLocation() {
    this.router.navigateByUrl("/menu/new-location");
  }

 async onRemove(p: Place) {
    let alert =  await this.alertCtrlr.create({
      header: 'Confirmation',
      message:'Etes vous sur?',
      buttons: [
        {
          text: 'OUI',
      handler: () => {
      this.removeLocation(p);

    }
  },
        {
          text:'Non',
          handler: () =>{}
        }

      ]
    });
    await alert.present();
}


onGetLocations(){
    this.locationService.getLocations().then(data=>{
      this.locations=data;
    });
  }

  private removeLocation(p: Place) {

      let  index= this.locations.indexOf(p);
      this.locations.splice(index,1);
      this.locationService.updateLocations(this.locations);
  }

    onDetailLocation(p: Place) {
      this.locationService.currentLocation=p;
        this.router.navigateByUrl("/menu/location-details");
    }
}
