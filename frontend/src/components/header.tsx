import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={styles.header}>
      <div style={styles.title}>appname</div>
      <div style={styles.avatar}></div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    width: '100%',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
  },
};

export default Header;
