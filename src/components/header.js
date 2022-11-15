import '../styles/header.css';

import metaBNBLogo from '../assets/logo.svg';

import NavBar from '../components/navbar';

const buttonText = "Connect wallet";


function Header() {
    return (
        <div className = "w-90 header" >
            <div className='logo' style={{border : "solid"}}>
                <img src={metaBNBLogo} alt="meta logo"/>
                {/* <img src={metaBNBLogo2} alt="meta logo"/> */}
            </div>

            {/* <NavBar className='' /> */}

            <div className='connect-btn'>
                <input type="submit" value={buttonText} className='theme-color-bg'/>
            </div>

        </div>
    );
}

export default Header;