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
      <div style={styles.tableContainer}>
        {circlesArray.map((numCircles, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              ...styles.row,
              display: rowIndex <= currentRow ? "flex" : "none",
            }}
          >
            {Array.from({ length: numCircles }).map(
              (_, circleIndex) => (
                <div
                  key={circleIndex}
                  style={{
                    ...styles.circle,
                    backgroundColor: completedCircles[
                      rowIndex
                    ][circleIndex]
                      ? "#6B8E23"
                      : "#BDD2B6",
                  }}
                  onClick={() =>
                    handleCircleClick(rowIndex, circleIndex)
                  }
                >
                  {completedCircles[rowIndex][circleIndex] &&
                    "✔"}
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

const styles = {
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },
  circle: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "0 15px",
    color: "white",
    fontSize: "30px",
  },
};

export default Tree;
