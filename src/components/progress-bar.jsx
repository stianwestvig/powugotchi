const ProgressBar = ({ percent }) => {
  return (
    <div style={{
      border: '1px solid white',
      borderRadius: 25,
      marginBottom: '10px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: percent + '%',
        backgroundColor: 'hotpink',
        height: '20px',
        borderRadius: 25,
      }} />
    </div>
  );
};

export default ProgressBar;
