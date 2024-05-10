import Home from "./src/screen/Home";
import Details from "./src/screen/Details";

export const routes = [
  {
    name: "Home",
    component: Home,
    options: { title: "Pokemon" },
  },
  {
    name: "Details",
    component: Details,
    options: { title: "Pokemon Details" },
  },
];
