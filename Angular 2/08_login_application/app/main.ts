import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {LoginApp} from './component.app';

bootstrap(LoginApp, [
  ROUTER_PROVIDERS
]);
