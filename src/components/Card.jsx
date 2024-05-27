import React from 'react';

const Card = ({ title, photo, videoId, children }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-xs rounded overflow-hidden shadow-2xl shadow-black">
        {videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        ) : (
          <img className="w-96 h-60" src={photo} alt="" />
        )}
        <div className="px-6 py-4 bg-gray-700">
          <div className="font-bold text-l mb-2">{title}</div>
          <div className="text-slate-400 text-base">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
