import { Directive, ElementRef, Renderer } from '@angular/core';
import { ConfigService } from '../service';
// import Unsplash, { toJson } from 'unsplash-js';
import { base64 } from './default';

@Directive({
  selector: "[renderBackgroundImage]"
})

export class RenderBackgroundImageDirective {
  unsplash: any;
  constructor(
    private configService: ConfigService,
    private el: ElementRef,
    private renderer: Renderer,
  ) {

    const photo = this.getRandomPhotoUrl();
    this.configService.currentPhoto = photo;
    renderer.setElementStyle(el.nativeElement, 'backgroundImage', `url(${ photo })`);

    setTimeout(() => {
      this.configService.isRandomPhoto && this.nextPhoto();
    }, 600);
  }
  private getRandomPhotoUrl (isNew?: boolean): string {
    const url = localStorage.getItem('nextPhoto') || base64;
    return isNew || !url ?  `https://unsplash.it/1680/910?random=${ Date.now() }` : url;
  }
  /*
  private getRandomPhoto (isNew?: boolean): Promise<any> {
    const url = localStorage.getItem('nextPhoto');
    const { width, height } = window.screen;

    return new Promise((resolve, reject) => {
      if (isNew || !url) {
        this.unsplash.photos.getRandomPhoto({
          width, height,
          featured: true,
        }).then(toJson).then(result => {
          console.log('result', result.urls);
          resolve(result.urls.custom || result.urls.full);
        });
      } else {
        resolve(url);
      }
    });
  }
  */
  private loadPhoto (url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = function () {
        resolve(this);
      }
      image.onerror = function () {
        reject(this);
      }
      image.src = url;
    });
  }
  private convertImgToBase64 (url: string): Promise<string> {
    // http://taobao.fm/archives/1990
    return new Promise((resolve, reject) => {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let image = new Image;
      let outputFormat = '';

      image.crossOrigin = 'Anonymous';
      image.onload = function () {
        canvas.height = image.height;
        canvas.width = image.width;
        ctx.drawImage(image, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        resolve(dataURL);
        canvas = null;
      }
      image.onerror = function () {
        reject(this);
      }
      image.src = url;
    });
  }
  private nextPhoto(): void {
    this.convertImgToBase64(this.getRandomPhotoUrl(true)).then(result => {
      localStorage.setItem('nextPhoto', result);
    });
    // this.getRandomPhoto(true).then(photo => {
    //   this.loadPhoto(photo).then(result => {
    //     console.log('localStorage', photo);
    //     localStorage.setItem('nextPhoto', photo);
    //   });
    // });
  }
}
