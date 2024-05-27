import React from 'react';

function CardMain({ conditions, photo, children }) {
  if (conditions) {
    return (
      <div className="flex items-center justify-start max-sm:flex-col max-sm:justify-center">
        <div className="flex-none w-60 h-80 relative">
          <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg shadow-black max-sm:h-64 max-sm:mt-2" loading="lazy" />
        </div>
        <div className=" bg-gray-700 rounded-r-lg h-full my-2 w-3/5 flex items-center justify-center shadow-xl shadow-black max-sm:rounded-lg">
          <p className="text-slate-400 m-2">{children}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-end max-sm:flex-col max-sm:justify-center">
        <div className=" bg-gray-700 rounded-l-lg h-full min-h-52 my-2 w-3/5 ml-14 flex items-center justify-center shadow-lg shadow-black max-sm:rounded-lg max-sm:ml-0 ">
          <p className="text-slate-400 m-2">{children}</p>
        </div>
        <div className="flex-none w-60 h-80 relative">
          <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg shadow-black max-sm:h-64 max-sm:mt-2" loading="lazy" />
        </div>
      </div>
    );
  }
}

export default CardMain;