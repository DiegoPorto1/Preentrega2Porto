import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';
const NavBar = () => {
return (
    <nav> 
       <Link to="/">
        <button>Ecommerce</button>
      </Link>
    <div className="botones">
    <Link to="/category/Hamburguesa">
    <button>Hamburguesa</button>
    </Link>
    <Link to="/category/cerveza">
    <button>cerveza</button>
    </Link> 
    <Link to="/category/bebida">
    <button>bebida</button>
    </Link>
    </div>
    <CartWidget />
    </nav>
)
}
export default NavBar