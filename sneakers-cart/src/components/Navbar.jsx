import { Icon } from '@iconify/react';


const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="logo">Sneaker</h1>
        <ul>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="profile">
            <Icon icon="mdi:cart-outline" className='cart-icon'/>
            <div className="profile-pic">
                <img src="/sneakers-cart/src/assets/images/image-avatar.png" alt="pic" />
            </div>
        </div>
    </nav>
  )
}


export default Navbar;