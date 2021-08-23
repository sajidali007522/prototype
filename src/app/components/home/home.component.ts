import {Component, OnInit, Renderer2} from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2,public config:ConfigService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.addJsToElement(`${this.config.getBaseUrl()}assets/js/test.js`);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
