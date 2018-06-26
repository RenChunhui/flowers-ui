import Home from "./routers/Home";
import Location from "./routers/Location";
import Orientation from "./routers/Orientation";

export const routes = [
  { path: '/', name: '首页', component: Home, exact: true},
  { path: '/location', name: '地理位置',component: Location },
  { path: '/orientation', name: '屏幕方向', component: Orientation }
]
