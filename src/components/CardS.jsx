import React from 'react';

function CardS({ photo, title, children }) {
  return (
    <div className="flex items-center justify-center my-24">
      <div className="rounded-lg bg-gray-700 w-96 shadow-xl shadow-black">
        <div className="flex items-center justify-center">
          <img src={photo} alt="" className="rounded-t-lg w-96" loading="lazy" />
        </div>
        <div className="flex flex-col p-4">
          <h6 className="font-bold">{title}</h6>
          <p className="text-slate-400 m-2 h-full">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default CardS;
