import React from "react";
import MainButton from "./common/MainButton";

const KeynotePresentation = ({toggleModal}) => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Dwain Chambers—Run, Talk, Coach, Win
        </h2>

        <div className="mt-6 text-gray-600">
          <p className="text-lg leading-relaxed">
            Dwain Chamber’s keynote presentation <span className="font-semibold">Four Fingers, One Thumb</span> is ideal for audiences in organisations of all kinds, especially in highly competitive sales environments, services in the public spotlight, sporting colleges, and schools.
          </p>

          <h3 className="mt-6 font-semibold text-xl text-gray-700">
            What this talk offers:
          </h3>
          <ul className="list-disc pl-5 space-y-3 mt-3">
            <li>Insight into the need to take ownership for our own decisions</li>
            <li>A different way to see challenging situations and create a plan for success</li>
            <li>Tools to develop habits for overcoming challenges</li>
            <li>Appreciation that making change starts by changing oneself</li>
          </ul>

          <p className="mt-6 text-gray-700">
            They will leave the room feeling empowered to own their own decisions and face disappointments with a positive attitude. They will recognise how to tackle new opportunities and work as a team towards success.
          </p>
        </div>

        <div className="mt-8 text-center">
          <MainButton link="#" title="Book Dwain for Your Event" toggleModal={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default KeynotePresentation;
