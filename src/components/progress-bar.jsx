const ProgressBar = ({ percent }) => {
  return (
    <div style={{
      border: '1px solid white',
      marginBottom: '10px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: percent + '%',
        backgroundColor: 'hotpink',
        height: '20px',
      }} />
    </div>
  );
};

export default ProgressBar;
