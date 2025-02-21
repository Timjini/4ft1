import { useState } from "react";

const MainButton = ({title, link, toggleModal}) => {

  return (
    <>
        <div>
        <button onClick={toggleModal} className="primaryBtn">
            <a href={link} >
                {title}
            </a>
        </button>
      </div>
    </>

  );
};

export default MainButton; 