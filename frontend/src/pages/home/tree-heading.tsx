import React from "react";

interface HeadingProps {
  header: string;
  subHeader: string;
}

const TreeHeading: React.FC<HeadingProps> = ({ header, subHeader }) => {
  return (
    <div className="bg-gray-200 p-5 mb-5 w-full text-center">
      <h1 className="mb-2">{header}</h1>
      <h2>{subHeader}</h2>
    </div>
  );
};

export default TreeHeading;
