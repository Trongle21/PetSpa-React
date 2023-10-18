import React from "react";
import data from "../../data.json";
import PathLink from "../../components/PathLink";

const AboutSection = () => {
  return (
    <section className="about--section">
      <div className="container">
        <PathLink content="About" />
        <div className="line"></div>
        <div className="about--section__wrapper">
          <div className="about--section__history row">
            <div className="about--section__history--info l-4 m-12 c-12">
              <h3 className="about--title">Câu chuyện của chúng ta</h3>
              <h6>
                 Năm 2008, hai nhà sáng lập Mike và Adam—mới ở Phố Wall—đã ra mắt
                 Throw Me A Bone với ý tưởng tạo ra một sản phẩm được cá nhân hóa hơn,
                 dịch vụ chăm sóc thú cưng thuận tiện và dễ tiếp cận tại Thành phố New York.
                 Bắt đầu là một doanh nghiệp dắt chó đi dạo nhỏ nhưng phát đạt trên
                 Upper East Side nhanh chóng trở thành cơ sở hoạt động gồm 10 người trong vòng hai
                 năm. Đến năm 2011, Throw Me A Bone mở rộng ra ngoài việc dắt chó đi dạo đến
                 cung cấp dịch vụ chăm sóc thú cưng (cho cả mèo nữa!), chải lông và huấn luyện chó,
                 cung cấp dịch vụ tại nhà trên khắp Manhattan. Năm 2017, chúng tôi
                 đã mở cơ sở chăm sóc thú cưng đầy đủ dịch vụ đầu tiên ở Midtown West
                 hoàn chỉnh với spa dành cho thú cưng, phòng chơi và nơi chạy chó. Hôm nay chúng ta
                 vận hành 7 địa điểm cơ sở với đội ngũ trên 35 người tận tâm
                 Các chuyên gia chăm sóc thú cưng cung cấp hơn 200 dịch vụ mỗi ngày trên khắp
                 Manhattan, Brooklyn và Nữ hoàng. Thú cưng toàn diện, chất lượng cao
                 việc chăm sóc chưa bao giờ dễ tiếp cận hơn thế và chúng tôi tự hào là một
                 dẫn đầu trong việc nâng cao cuộc sống của thành phố New York là thú cưng.
              </h6>
            </div>
            <div className="about--section__picture l-7 m-12 c-12">
              <div
                className="about--image"
                style={{
                  backgroundImage: `url("https://i.ibb.co/FWMczSZ/about-ceo.jpg")`,
                }}
              ></div>
            </div>
          </div>
          <div className="about--section__mission">
            <div className="about--section__mission--info text-center">
              <h3 className="about--title">Our Mission</h3>
              <h6>
                 Để làm phong phú thêm cuộc sống của mỗi thú cưng trong sự chăm sóc của chúng tôi trong khi
                 mang lại giá trị, sự thuận tiện và sự yên tâm cho họ
                 những chủ sở hữu.
              </h6>
            </div>
          </div>
          <div className="about--section__principles row">
            <div className="about--section__picture l-7 m-12 c-12">
              <div
                className="about--image"
                style={{
                  backgroundImage: `url("https://i.ibb.co/fCY9sy4/about-2.jpg")`,
                }}
              ></div>
            </div>
            <div className="about--section__principles--info l-4 m-12 c-12">
              <h3 className="about--title">Nguyên tắc chỉ đạo của chúng tôi</h3>
              <div className="principles-list">
                {data["principles"].map((principle, index) => (
                  <div className="principles-list__name" key={index}>
                    <h4>{principle.name}</h4>
                    <h6>{principle.description}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
