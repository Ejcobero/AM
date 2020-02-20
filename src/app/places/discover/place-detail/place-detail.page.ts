import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private router: Router, private navCTRL: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCTRL.navigateBack('/places/tabs/discover');
    // this.navCTRL.pop();
    this.modalCtrl.create({component: CreateBookingComponent,
       componentProps: {selectedPlace: this.place}
      }).then(modalEl => {
      modalEl.present();
    });
  }
}
