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
    e.stopPropagation();
    if (e.target.classList.contains('app-content')) {
      this.configService.setVisible('close');
    }
  }
}
