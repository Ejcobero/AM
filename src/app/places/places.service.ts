import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'P1',
      'MSU-IIT',
      'In Iligan City',
      'https://live.staticflickr.com/3469/3242276413_a4fc768fa4_z.jpg',
      5000
    ),
    new Place(
      'P2',
      'MONHS',
      'In Oroquieta City',
      'https://pbs.twimg.com/media/A7Zu3K5CMAEGTjN.jpg',
      2500
    ),
    new Place(
      'P3',
      'Dakak',
      'In Dipolog City Dakak',
      'https://new-hls.s3.amazonaws.com/hls/data/4102/website/general/bn/normal_ban-1.jpg',
      1000
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
