import React from "react";

const Pcard = ({ name, position, src }) => {
  return (
    <div className="h-[23.5rem] w-[17rem] rounded-md shadow">
      <div className="bg-gray-300 h-[19rem] rounded-t-md">
        <img className="h-[19rem]" src={src} alt="max" />
      </div>
      <div className="py-2 space-y-.5">
        <h3 className="text-lg">{name}</h3>{" "}
        <h6 className="text-sm">{position}</h6>
      </div>
    </div>
  );
};

export default Pcard;
