import React from "react";
import HeroSection from "../../components/HeroSection";
import SectionServiceBook from "./SectionServiceBook";

const ServiceBook = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/y6n9rt2/service-bg-1.jpg"
        content="Chúng tôi cũng yêu thú cưng"
        des="Thú cưng của bạn sẽ có môi trường như ở nhà, mùi vị, khung cảnh và âm thanh quen thuộc cũng như thức ăn và đồ ăn vặt"
      />
      <SectionServiceBook />
    </main>
  );
};

export default ServiceBook;
