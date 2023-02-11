const Navigator = ({ creatures }) => {
  const { ketil, andreas, iris } = creatures;
  const [ ketilState, setKetilState ] = ketil;
  const [ andreasState, setAndreasState ] = andreas;
  const [ irisState, setIrisState ] = iris;

  return (
    <div>
      <button onClick={() => setKetilState(!ketilState)}>Ketil</button>
      <button onClick={() => setAndreasState(!ketilState)}>Andreas</button>
      <button onClick={() => setIrisState(!irisState)}>Iris og Arne</button>
    </div>
  );
};

export default Navigator;
