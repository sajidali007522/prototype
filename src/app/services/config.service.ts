import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configs={
    'base_url': '/'
  }
  constructor() { }

  getBaseUrl(){
    return this.configs['base_url'];
  }
}
