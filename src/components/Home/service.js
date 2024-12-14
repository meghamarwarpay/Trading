import Image from 'next/image';
import img from "../../assets/images/free-call.png"
import img1 from "../../assets/images/stock-market-news.png"
import img2 from "../../assets/images/stock-market.png"
import img3 from "../../assets/images/stocks.png"
import img4 from "../../assets/images/free-learning.png"

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <h3 className="section-heading">
          We Provide You with Researched Recommendations on Options Trading and Breakout Stocks to Enhance Your Trading Success
        </h3>
        <div className="row">
          <div className="col-md-4 col-sm-12 servicesPageLeft">
            <h3 className="data-aos" data-aos="fade-right" data-aos-duration="1000">
              We provide such services
            </h3>
          </div>
          <div className="col-md-4 col-sm-12 servicesPoints mt-5">
            <div className="servicesRulesWrap aos-init aos-animate" data-aos="flip-left" data-aos-delay="140">
              <div className="rulesImg">
                {/* Make sure the images are in the public folder */}
                <Image src={img} alt="Free Calls" className="servicesIcon" width={40} height={40} />
              </div>
              <div className="rulesContent">
                <h4>Free 2-3 Researched Options Calls</h4>
              </div>
            </div>
            <div className="servicesRulesWrap mt-5 aos-init aos-animate" data-aos="flip-left" data-aos-delay="120">
              <div className="rulesImg">
                <Image src={img1} alt="Market News" className="servicesIcon" width={40} height={40} />
              </div>
              <div className="rulesContent">
                <h4>Realtime Market News &amp; Updates</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 servicesPoints">
            <div className="servicesRulesWrap aos-init aos-animate" data-aos="flip-left" data-aos-delay="130">
              <div className="rulesImg">
                <Image src={img2} alt="Stocks" className="servicesIcon" width={40} height={40} />
              </div>
              <div className="rulesContent">
                <h4>Free 3-4 Breakout Stocks</h4>
              </div>
            </div>
            <div className="servicesRulesWrap mt-5 aos-init aos-animate" data-aos="flip-left" data-aos-delay="110">
              <div className="rulesImg">
                <Image src={img4} alt="Free Learning" className="servicesIcon" width={40} height={40} />
              </div>
              <div className="rulesContent">
                <h4>Free Learning Resources</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
