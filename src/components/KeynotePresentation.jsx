import React from "react";
import MainButton from "./common/MainButton";

const KeynotePresentation = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Dwain Chambers—Run, Talk, Coach, Win
        </h2>

        {/* Content Section */}
        <div className="mt-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Dwain Chamber’s keynote presentation <span className="font-semibold">Four Fingers, One Thumb</span> is ideal for audiences in organisations of all kinds, especially in highly competitive sales environments, services in the public spotlight, sporting colleges and schools.
          </p>

          <h3 className="mt-4 font-semibold text-xl">What this talk offers:</h3>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Insight into the need to take ownership for our own decisions</li>
            <li>A different way to see challenging situations and create a plan for success</li>
            <li>Tools to develop habits for overcoming challenges</li>
            <li>Appreciation that making change starts by changing oneself</li>
          </ul>

          <p className="mt-4">
            They will leave the room feeling empowered to own their own decisions and face disappointments with a positive attitude. They will recognise how to tackle new opportunities and work as a team towards success.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8 text-center">
          <MainButton link="#" title="Book Dwain for your Event" />
        </div>
      </div>
    </div>
  );
};

export default KeynotePresentation;
