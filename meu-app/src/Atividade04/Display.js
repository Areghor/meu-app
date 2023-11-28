import './Display.css';
function Display( {valor} ) {
  return (
    <div id="display" className="display">
      {valor}
    </div>
  );
}

export default Display;
