import React from "react";

interface HeadingProps {
  header: string;
  subHeader: string;
}

const TreeHeading: React.FC<HeadingProps> = ({ header, subHeader }) => {
  return (
    <>
      <div className="text-sm">{header}</div>
      <div className="text-md">{subHeader}</div>
    </>
  );
};

export default TreeHeading;
