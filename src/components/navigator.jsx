const Navigator = ({ creatures }) => {
  const { ketil, andreas, iris } = creatures;
  const [ ketilState, setKetilState ] = ketil;
  const [ andreasState, setAndreasState ] = andreas;
  const [ irisState, setIrisState ] = iris;

  return (
    <div>
      <button onClick={() => setKetilState(!ketilState)}>Ketil: {ketilState}</button>
      <button onClick={() => setAndreasState(!ketilState)}>Andreas: {andreasState}</button>
      <button onClick={() => setIrisState(!irisState)}>Iris og Arne: {irisState}</button>
    </div>
  );
};

export default Navigator;
