const Statistics = ({ data }) => {
  console.log(data);
  return <p>Power: {data?.data?.P}</p>;
};

export default Statistics;
