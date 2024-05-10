import Home from "./src/screen/Home";
import Details from "./src/screen/Details";
import ImageGallery from "./src/screen/ImageGallery";

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
  {
    name: "ImageGallery",
    component: ImageGallery,
    options: { title: "Pokemon Image Gallery" },
  },
];
