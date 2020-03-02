import React from "react";

const Header = () => {
  return (
    <header>
      <h1>
        Nc-News
        <iframe
          className="clock"
          title="clock"
          src="http://free.timeanddate.com/clock/i76hm6ew/tluk/fn4/fs16/fcfff/tc000/pct/bo2/tt0/tw0/tm1/th1/ts1/tb4"
          frameBorder="0"
          width="90"
          height="38"
          allowtransparency="true"
        ></iframe>
      </h1>
    </header>
  );
};

export default Header;
