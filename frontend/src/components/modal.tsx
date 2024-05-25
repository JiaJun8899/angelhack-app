import React from 'react';

interface ModalProps {
  onClose: () => void;
  header: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, header, text }) => {
  return (
    
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg text-center relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-black text-15">
          X
        </button>
        <h2>{header}</h2>
        <p>{text}</p>
        <button
          onClick={onClose}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
