
import React from "react";
const Section = ({ title }) => {

  return (


    <>
     <div className="my-title">


      <div className=" flex items-center py-4">
        {/* <!-- The left line --> */}
        <div className="my-line flex-grow h-0.5"></div>

        {/* <!-- Your text here --> */}
        <span className="flex-shrink px-4 text-transparent text-3xl bg-clip-text italic font-light">{title}</span>

        {/* <!-- The right line --> */}
        <div className="my-line flex-grow h-0.5 "></div>
      </div>
     </div>
    </>



  );
};

export default Section;




