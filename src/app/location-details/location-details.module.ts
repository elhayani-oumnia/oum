import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPageRoutingModule } from './location-details-routing.module';

import { LocationDetailsPage } from './location-details.page';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationDetailsPageRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: '6ba02f24a9msh130c22bb3253c41p1ce8a9jsnba4d1987ff69'
        }),
    ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
