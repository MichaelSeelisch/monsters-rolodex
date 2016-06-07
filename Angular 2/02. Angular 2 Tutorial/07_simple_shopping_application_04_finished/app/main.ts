import {bootstrap}    from '@angular/platform-browser-dynamic';
import {MyMainApp} from './component.app';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

bootstrap(MyMainApp, [
  ROUTER_PROVIDERS
]);
