import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../../services/config.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

}
