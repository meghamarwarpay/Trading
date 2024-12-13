import Image from 'next/image';
// Uncomment and use this import if you want to use local images
// import img from '../../assets/images/panel-bg2.jpg';

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
                {/* Uncomment this if you want to show an image */}
                {/* <Image src={img} alt="Free Calls" className="servicesIcon" width={40} height={40} /> */}
              </div>
              <div className="rulesContent">
                <h4>Free 2-3 Researched Options Calls</h4>
              </div>
            </div>
            <div className="servicesRulesWrap mt-5 aos-init aos-animate" data-aos="flip-left" data-aos-delay="120">
              <div className="rulesImg">
                {/* Uncomment this if you want to show an image */}
                {/* <Image src="/images/stock-market-news.png" alt="Market News" className="servicesIcon" width={40} height={40} /> */}
              </div>
              <div className="rulesContent">
                <h4>Realtime Market News &amp; Updates</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 servicesPoints">
            <div className="servicesRulesWrap aos-init aos-animate" data-aos="flip-left" data-aos-delay="130">
              <div className="rulesImg">
                {/* Uncomment this if you want to show an image */}
                {/* <Image src="/images/stocks.png" alt="Stocks" className="servicesIcon" width={40} height={40} /> */}
              </div>
              <div className="rulesContent">
                <h4>Free 3-4 Breakout Stocks</h4>
              </div>
            </div>
            <div className="servicesRulesWrap mt-5 aos-init aos-animate" data-aos="flip-left" data-aos-delay="110">
              <div className="rulesImg">
                {/* Uncomment this if you want to show an image */}
                {/* <Image src="/images/free-learning.png" alt="Free Learning" className="servicesIcon" width={40} height={40} /> */}
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
