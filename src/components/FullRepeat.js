import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import './FullRepeat.css'
function FullRepeat() {
  let { id } = useParams();
  let url= `url(https://os-cdn.ec-ffmt.com/gl/pokemon/dedicate/pattern-flat/${id}.jpg)`;
  let next = parseInt(id)+1;
  let prev = parseInt(id)-1;
  return (
    <div className="App">
      <h1>{id}</h1>
      <Link to={`/${prev}`}><button>&#60;</button></Link>
      <Link to={`/${next}`}><button>&#62;</button></Link>
      <div className="FullImage" style={{backgroundImage: url}}></div>
    </div>
  );
}

export default FullRepeat;
