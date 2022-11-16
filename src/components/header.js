import '../styles/header.css';

// import metaBNBLogo from '../assets/logo.svg';
import metaBNBLogo from '../assets/logo1.svg';
import metaBNB from '../assets/metabnb.png';


import NavBar from '../components/navbar';

const buttonText = "Connect wallet";


function Header() {
    return (
        <div className = "header" >
            <div className='logo' >
                <img src={metaBNBLogo} alt="meta logo"/>
                <img src={metaBNB} alt="meta logo"/>
            </div>

            <NavBar className='' />

            <div className='connect-btn'>
                <input type="submit" value={buttonText} className='theme-color-bg'/>
            </div>

        </div>
    );
}

export default Header;