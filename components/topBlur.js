import React from "react";

const TopBlur = () => {
  return (
    <div
      className="h-[300px] w-full absolute top-0 -z-10"
      style={{
        background: "rgb(69,204,245)",
        background:
          "linear-gradient(180deg, rgba(69,204,245,0.6699054621848739) 17%, rgba(195,241,255,0.7847514005602241) 39%, rgba(255,255,255,0.711922268907563) 64%, rgba(255,255,255,0.7763480392156863) 80%)",
      }}
    ></div>
  );
};

export default TopBlur;
