
import './assets/styles/index.scss'
import Taskbar from "./project-ddf/Header-Nav";
import HeaderCarousel from "./project-ddf/Header-Carousel";
import BodyContent from "./project-ddf/Body-Content";
import BodyPrice from "./project-ddf/Body-Price";
import BodyProduct from "./project-ddf/Body-Product";
import BodyRecuiment from "./project-ddf/Body-Recuitment";
import HeaderContact from './project-ddf/Header-Contact';
function App() {


  return (
    <>
      <HeaderContact/>
      <Taskbar />
      <HeaderCarousel />
      <body>
        <BodyContent />
        <BodyPrice />
        <BodyProduct />
        <BodyRecuiment />
      </body>
    </>
  );
}

export default App;
