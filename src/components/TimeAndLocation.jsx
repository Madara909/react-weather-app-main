import React from "react";

function TimeAndLocation({stats}) {
  console.log(stats.dat);
  console.log(stats.tim);
  console.log(stats.name);
  console.log(stats.country);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
        {`${stats.dat}  ${stats.tim}`}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${stats.name}, ${stats.country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
