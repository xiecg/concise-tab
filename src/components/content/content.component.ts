import { Component } from '@angular/core';
import { ConfigService } from '../../service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent {
  constructor(private configService: ConfigService) {}
  onTabMenuClose (e) {
    const target = e.target;
    if (target.tagName === 'INPUT') {
      this.configService.setVisible('close');
      return false;
    }
    if (target.classList.contains('app-content')) {
      this.configService.setVisible('close');
      this.configService.setSearchVisible('close');
    }
  }
}
