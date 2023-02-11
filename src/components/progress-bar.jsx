const ProgressBar = ({ percent }) => {
  return (
    <div style={{ width: percent, backgroundColor: 'hotpink', height: '10px' }} />
  );
};

export default ProgressBar;
