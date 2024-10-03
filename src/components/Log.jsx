export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.cell}`}>
          <strong>{turn.player}</strong> played to row {turn.square.row}, cell{' '}
          {turn.square.cell}
        </li>
      ))}
    </ol>
  );
}
