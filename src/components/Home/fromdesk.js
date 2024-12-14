import Link from "next/link";
import img from "../../assets/images/picture.png"
import Image from "next/image";
import { Button } from "../ui/button";
export default function FromDesk() {
  return (
    <div className="from-desk">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 ra-img">
            <Image
              src={img}
              alt="Trading Expert"
              className="w-1/2 h-auto max-w-md mx-auto object-cover"
            />
          </div>
          <div
            className="col-md-6 col-sm-12 desk-text wow zoomIn"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          >
            <div className="desk-content">
              <h3>From Desk Of RA</h3>
              <p>
                Trading is not just about charts, numbers, or trends, it`s about
                discipline, patience, and strategy. For a newbie trader,
                remember that the market rewards those who are prepared, not
                impulsive. Start small, focus on learning, and never let greed
                overshadow logic.
              </p>
              <p>
                For expert traders, consistency is the key. Evolving with market
                dynamics, refining your strategies, and keeping emotions at bay
                will ensure longevity in this journey.
              </p>
              <p>
                At Breakout Mantra, we aim to empower traders at every stage
                with actionable insights and robust strategies. Let`s grow
                together - one breakout at a time.
              </p>
              <h6>- Hiteshwari</h6>
              <p>SEBI Registered Research Analyst, Breakout Mantra</p>
            </div>
          </div>
        </div>
        <div className="btn-div flex justify-center items-center">
  <Link href="/about" className="common-btn">
    <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
      Know More
    </Button>
  </Link>
</div>

      </div>
    </div>
  );
}
