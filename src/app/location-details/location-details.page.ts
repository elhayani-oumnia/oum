import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';
import {Camera} from '@ionic-native/camera/ngx';
import {CameraOptions} from '@ionic-native/camera/ngx'
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  public currentPlace:Place;

  constructor(private  locService: LocationsService, private camera:Camera,
              private  alertCtrl:AlertController) { }

  ngOnInit() {
    this.currentPlace=this.locService.currentLocation;
  }
   async onTakePicture() {
    const options1:  CameraOptions={
      quality:50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
      targetWidth:320,
      targetHeight:240
    };

    const options2:  CameraOptions={
      quality:50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
      targetWidth:320,
      targetHeight:240
    };
     let alery= await this.alertCtrl.create({
       header:'Confirmation',
       message:'Source',
       buttons:[
         {
           text:'Camera',
           handler:()=> {
              this.getPicture(options1);

           }
         },
         {
           text: 'Librairy',
           handler: () => {
             this.getPicture(options2);}
         }
       ]

    });
     //await alert.present();
  }



  private getPicture(params: CameraOptions) {
    this.camera.getPicture(params)
        .then(data=>{
          let base64Image = 'data:image:/jpeg;base64,' + data;
          this.currentPlace.photo.push(base64Image);
          this.locService.addPhoto(base64Image,this.currentPlace.timestamp);
        });
  }
}
