import React from 'react';

function CardMain({ conditions, photo, children }) {
  if (conditions) {
    return (
      <div className="flex items-center justify-start">
        <div className="flex-none w-60 h-80 relative">
          <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg shadow-black" loading="lazy" />
        </div>
        <div className=" bg-gray-700 rounded-r-lg h-full my-2 w-3/5 flex items-center justify-center shadow-xl shadow-black">
          <p className="text-slate-400 m-2">{children}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-end">
        <div className=" bg-gray-700 rounded-l-lg h-full min-h-52 my-2 w-3/5 ml-14 flex items-center justify-center shadow-lg shadow-black">
          <p className="text-slate-400 m-2">{children}</p>
        </div>
        <div className="flex-none w-60 h-80 relative">
          <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg shadow-black" loading="lazy" />
        </div>
      </div>
    );
  }
}

export default CardMain;