import { Carousel } from "react-bootstrap"
import { useState } from "react";
const HeaderCarousel = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect} className="header-carousel">
      <Carousel.Item className="w-100 h-100">
        <img
          className="d-block w-100"
          src="https://xuconcept.com/wp-content/uploads/2021/11/tai-hinh-nen-mien-phi.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="w-100 h-100">
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg"
          alt="Second slide"
        />

      </Carousel.Item >
      <Carousel.Item className="w-100 h-100">
        <img
          className="d-block w-100"
          src="https://www.anphatpc.com.vn/media/news/1410_z2125088203457_2532f3295c062020429c0282f8675918.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HeaderCarousel