import React from 'react';

interface ModalProps {
  onClose: () => void;
  header: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, header, text }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          X
        </button>
        <h2>{header}</h2>
        <p>{text}</p>
        <button onClick={onClose} style={styles.doneButton}>
          Done
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '5px',
    textAlign: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  doneButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Modal;
