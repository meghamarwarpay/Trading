

export default function WhyUs() {


  return (
    <div id="why-us" className="section why-us">
      <div className="container">
        <div className="header-sec text-center">
          <h3 className="section-heading">Why Choose Us</h3>
        </div>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 col-sm-12">
            <div className="choose-pointsleft">
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-right"
              >
                <img src="/images/expertise.gif" alt="Expertise" className="whyus-icons" />
                <h4>SEBI Registered Expertise</h4>
                <p>Our research and recommendations comply with regulatory standards.</p>
              </div>
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-right"
              >
                <img src="/images/customized.gif" alt="Customized" className="whyus-icons" />
                <h4>Proven Track Record</h4>
                <p>Over 6 years of experience in identifying high-potential breakout trades.</p>
              </div>
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-right"
              >
                <img src="/images/comprehensive.gif" alt="Comprehensive" className="whyus-icons" />
                <h4>Holistic Approach</h4>
                <p>Comprehensive research across cash and F&amp;O markets.</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-md-4 col-sm-12">
            <div className="choose-pointsmid">
              <div className="points-wrap">
                <img src="/images/img-1.jpg" alt="Commitment" />
                <p>We are committed to deliver You with Informed decision Making.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4 col-sm-12">
            <div className="choose-pointsright">
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-left"
              >
                <img src="/images/techniqus.gif" alt="Tailored Insights" className="whyus-icons" />
                <h4>Tailored Insights</h4>
                <p>Customized strategies to meet individual trading goals.</p>
              </div>
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-left"
              >
                <img src="/images/client-centric.gif" alt="Educational Focus" className="icon-color whyus-icons" />
                <h4>Educational Focus</h4>
                <p>Empowering clients with knowledge to trade confidently.</p>
              </div>
              <div
                className="points-wrap points-wraphover aos-init aos-animate"
                data-aos="fade-left"
              >
                <img src="/images/helpdesk.gif" alt="Support" className="icon-color whyus-icons" />
                <h4>Continuous Support</h4>
                <p>Breakout Mantra offers continuous guidance and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

