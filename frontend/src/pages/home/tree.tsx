import React, { useState } from "react";
import Modal from "../../components/modal";
import TreeHeading from "./tree-heading";

interface TreeProps {
  circlesArray: number[];
  header: string;
  subHeader: string;
}

const Tree: React.FC<TreeProps> = ({ circlesArray, header, subHeader }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [completedCircles, setCompletedCircles] = useState<boolean[][]>(
    Array.from({ length: circlesArray.length }, () => new Array(3).fill(false))
  );
  const [clickedCircle, setClickedCircle] = useState<{
    row: number;
    index: number;
  } | null>(null);

  const modalData = { header: "Header Text", text: "Modal Body Text" };

  const handleCircleClick = (row: number, index: number) => {
    setClickedCircle({ row, index });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (clickedCircle) {
      setCompletedCircles((prev) => {
        const newCompletedCircles = prev.map((row, rowIndex) =>
          row.map((circle, circleIndex) =>
            rowIndex === clickedCircle.row &&
            circleIndex === clickedCircle.index
              ? true
              : circle
          )
        );
        return newCompletedCircles;
      });
      if (clickedCircle.row === currentRow) {
        setCurrentRow(currentRow + 1);
      }
    }
    setClickedCircle(null);
  };

  return (
    <>
      <TreeHeading header={header} subHeader={subHeader} />
      <div className="flex flex-col items-center">
        {circlesArray.map((numCircles, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center mb-5 ${rowIndex <= currentRow ? 'block' : 'hidden'}`}
          >
            {Array.from({ length: numCircles }).map(
              (_, circleIndex) => (
                <div
                  key={circleIndex}
                  className={`w-16 h-16 rounded-full flex justify-center items-center cursor-pointer mx-3 ${completedCircles[rowIndex][circleIndex] ? 'bg-green-600' : 'bg-green-300'}`}
                  onClick={() => handleCircleClick(rowIndex, circleIndex)}
                >
                  {completedCircles[rowIndex][circleIndex] && "✔"}
                </div>
              )
            )}
          </div>
        ))}
        {showModal && (
          <Modal
            onClose={handleCloseModal}
            header={modalData.header}
            text={modalData.text}
          />
        )}
      </div>
    </>
  );
};

export default Tree;
