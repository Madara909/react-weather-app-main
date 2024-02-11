import React from "react";
function Forecast() {
  
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">hourly Forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">

      <div lassName="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04.53 AM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`12°`}</p>
      </div>
      <div lassName="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04.53 AM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`12°`}</p>
      </div>
      <div lassName="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04.53 AM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`12°`}</p>
      </div>
      <div lassName="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04.53 AM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`12°`}</p>
      </div>
      <div lassName="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04.53 AM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`12°`}</p>
      </div>

        
      </div>
    </div>
  );
}

export default Forecast;
