import { useState } from "react";

export default function Entertainment() {
  return (
    <>
      <div className="pageTitle">Best Activities On Taniti</div>
      <div className="activities">
        <DropDown title="Scuba Diving">
          Explore vibrant coral reefs and underwater caves with certified local
          guides.
        </DropDown>
        <DropDown title="Hiking the Volcanic Train">
          Guided hikes through lush jungle paths and ancient lava fields offer
          both adventure and education.
        </DropDown>
        <DropDown title="Cultural Dance Nights">
          Enjoy traditional Tanitian dance performances accompanied by drums and
          storytelling every Friday night.
        </DropDown>
        <DropDown title="Beach Day">
            Take a break and relax on our beautiful beaches.
        </DropDown>
        <DropDown title="Explore History">
            Visit one of our history and art museums and learn about our culture.
        </DropDown>
        <DropDown title="See Taniti From Above">
            Soar above the island on a guided helicopter tour.
        </DropDown>
        <DropDown title="Sample the Local Quisine">
            Explore one of our many restaurants and pubs.
        </DropDown>
        <DropDown title="Play a Round of Golf">
            Be one of the first to play on our brand new 9-hold golf course.
        </DropDown>
      </div>
    </>
  );
}

function DropDown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="activity">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="activities">{children}</div>}
    </div>
  );
}

