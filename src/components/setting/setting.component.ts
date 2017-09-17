import { Component } from '@angular/core';
import { ConfigService } from '../../service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})

export class SeeingComponent {
  constructor(private configService: ConfigService) {}
  handleAuto () {
    const isRandomPhoto = this.configService.isRandomPhoto;
    const newIsRandomPhoto = !isRandomPhoto;
    this.configService.setRandomPhoto(newIsRandomPhoto);
    if (newIsRandomPhoto) {
      localStorage.removeItem('isRandomPhoto');
    } else {
      localStorage.setItem('isRandomPhoto', 'true');
      localStorage.setItem('nextPhoto', this.configService.currentPhoto);
    }
  }
  get tooltipText () {
    return this.configService.isRandomPhoto ? 'Close random photos' : 'Open random photos';
  }
  get isRandomPhoto () {
    return this.configService.isRandomPhoto;
  }
}
