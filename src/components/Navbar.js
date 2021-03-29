import  React  from  'react' ;
import  {  Link  }  from  'react-router-dom';



const Navbar = () => {
    return (
        <body>
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Loja de sapatos</Link>

                    <ul className="right">

                        <Link to="/">Página inicial</Link>

                    </ul>
                    <ul className="left">

                        <Link to="/cart">Meu carrinho</Link>
                    </ul>
                </div>
            </nav>
        </body>
    )
}

export default Navbar;