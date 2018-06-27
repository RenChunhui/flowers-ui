import Home from "./routers/Home";
import Location from "./routers/Location";
import Orientation from "./routers/Orientation";
import Call from './routers/Call';
import Battery from './routers/Battery';

export const routes = [
  { path: '/', name: '首页', component: Home, exact: true},
  { path: '/location', name: '地理位置',component: Location },
  { path: '/orientation', name: '屏幕方向', component: Orientation },
  { path: '/call', name: '电话', component: Call },
  { path: '/battery', name: '电池', component: Battery }
]
