import React, { useState, useEffect } from "react";
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
  const [clickedCircles, setClickedCircles] = useState<boolean[][]>(
    Array.from({ length: circlesArray.length }, () => new Array(3).fill(false))
  );
  const [allCompleted, setAllCompleted] = useState(false);

  const dummyData = [
    { header: "Lesson on Scam 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { header: "Lesson on Scam 2", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { header: "Lesson on Scam 3", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { header: "Lesson on Scam 4", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    { header: "Lesson on Scam 5", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
    { header: "Lesson on Scam 6", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { header: "Lesson on Scam 7", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { header: "Lesson on Scam 8", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { header: "Lesson on Scam 9", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    { header: "Lesson on Scam 10", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." }
  ];

  const handleCircleClick = (row: number, index: number) => {
    setClickedCircle({ row, index });
    setShowModal(true);

    setClickedCircles((prev) => {
      const newClickedCircles = prev.map((rowArr, rowIndex) =>
        rowArr.map((circle, circleIndex) =>
          rowIndex === row && circleIndex === index ? true : circle
        )
      );
      return newClickedCircles;
    });
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

  useEffect(() => {
    const totalCircles = circlesArray.reduce((acc, num) => acc + num, 0);
    const completedCount = completedCircles.flat().filter(Boolean).length;
    setAllCompleted(completedCount === totalCircles);
  }, [clickedCircles, completedCircles, circlesArray]);

  return (
    <>
      <TreeHeading header={header} subHeader={subHeader} />
      <div className="flex flex-col items-center">
        {circlesArray.map((numCircles, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-5">
            {Array.from({ length: numCircles }).map((_, circleIndex) => (
              <div
                key={circleIndex}
                className={`w-16 h-16 rounded-full flex justify-center items-center cursor-pointer mx-3 ${
                  completedCircles[rowIndex][circleIndex] ? 'bg-green-600' : clickedCircles[rowIndex][circleIndex] ? 'bg-green-300' : 'bg-gray-300'
                } ${clickedCircles[rowIndex][circleIndex] ? 'border-4 border-yellow-500' : ''}`}
                onClick={() => handleCircleClick(rowIndex, circleIndex)}
              >
                {completedCircles[rowIndex][circleIndex] && "✔"}
              </div>
            ))}
          </div>
        ))}
        {showModal && clickedCircle && (
          <Modal
            onClose={handleCloseModal}
            header={dummyData[clickedCircle.row * 3 + clickedCircle.index].header}
            text={dummyData[clickedCircle.row * 3 + clickedCircle.index].text}
          />
        )}
        <button
          disabled={!allCompleted}
          className={`mt-5 px-4 py-2 rounded ${allCompleted ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-700'}`}
          onClick={() => alert('Congratulations! Here is your reward!')}
        >
          {allCompleted ? 'Click for Reward' : 'Finish all the modules for a reward'}
        </button>
      </div>
    </>
  );
};

export default Tree;
