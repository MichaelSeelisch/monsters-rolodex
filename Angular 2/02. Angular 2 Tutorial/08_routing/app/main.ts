import { bootstrap }    from '@angular/platform-browser-dynamic';
import { MyShopComponent } from './component.index';
import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(MyShopComponent, [
  ROUTER_PROVIDERS
]);
