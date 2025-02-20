import { useState } from "react";
import FormModal from "../modals/ContactModal";

const MainButton = ({title, link}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
        <div>
        <button onClick={toggleModal} className="primaryBtn">
            <a href={link} >
                {title}
            </a>
        </button>
      </div>
      {/* Modal Component */}
      <FormModal isOpen={isOpen} toggleModal={toggleModal} />
    </>

  );
};

export default MainButton; 