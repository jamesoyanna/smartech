import Layout1 from "./Layouts/Layout1/Layout1";
import Layout2 from "./Layouts/Layout2/Layout2";
import Layout3 from "./Layouts/Layout3/Layout3";
import Layout4 from "./Layouts/Layout4/Layout4";
import Layout5 from "./Layouts/Layout5/Layout5";
import Layout6 from "./Layouts/Layout6/Layout6";

const routes = [
  { path: "/Layout2", component: Layout2 },
  { path: "/Layout3", component: Layout3 },
  { path: "/Layout4", component: Layout4 },
  { path: "/Layout5", component: Layout5 },
  { path: "/Layout6", component: Layout6 },
  { path: "/", component: Layout1 },
];

export default routes;
