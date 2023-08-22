import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Cart } from './Cart'

export function Header() {
    return(
        <header className="mx-12 my-9 flex justify-between">
            <img className='w-52' src={logo} alt="Porsaid" />
            <nav>
                <ul className='flex gap-5 font-semibold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products/men'>Men</Link></li>
                    <li><Link to='/products/women'>Women</Link></li>
                    {/* <li><Link to='/products/accessories'>Accessories</Link></li> */}
                </ul>
            </nav>
            <div>
                <Cart />
            </div>
        </header>
    )
}