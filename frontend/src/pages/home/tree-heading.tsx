import React from "react";

interface HeadingProps {
  header: string;
  subHeader: string;
}

const TreeHeading: React.FC<HeadingProps> = ({ header, subHeader }) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        marginBottom: "20px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>{header}</h1>
      <h2>{subHeader}</h2>
    </div>
  );
};

export default TreeHeading;
