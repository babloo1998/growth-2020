import Root from "./components/Root/index";
import Home from "./components/Home/index";
import FilterScreen from "./components/fiterScreen/index";
import Timeline from './components/timeline-module/index';

const routes = [
  {
    path: "/",
    exact: true,
    component: Root,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/filter",
    exact: true,
    component: FilterScreen,
  },
  {
    path: "/timeline",
    exact: true,
    component: Timeline,
  },
];

export default routes;
