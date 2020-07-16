import React, { useState,useEffect } from 'react';

export default ({ name, title, content }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
 }, [open ]);
  return (
    <React.Fragment>
      <button style={{outline:0}} onClick={() => setOpen(!open)} type="button" className="btn">
        {name}
      </button>
      {open && (
        <div className="fixed z-50 flex flex-col justify-left bg-white mx-auto inset-0 w-2/3 rounded p-4 m-4 shadow-lg">
          <div className="header font-black text-center text-black underline"> {title} </div>
          <div className="content mt-6 overflow-scroll text-xs text-black overflow-x-hidden">{content()}</div>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            style={{outline:0}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 mx-auto mt-16 rounded"
          >
            Close
          </button>
        </div>
      )}
    </React.Fragment>
  );
};
