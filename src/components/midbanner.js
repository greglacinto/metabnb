import '../styles/midbanner.css';

import mbTokenLogo from '../assets/mbTokenLogo.svg';
import metaMaskLogo from '../assets/metaMaskLogo.svg';
import openSeaLogo from '../assets/openSeaLogo.svg';


function MidBanner(){
    return (
        <div className="section theme-color-bg midBannerSec">
            <div className='icon-div'>
                <img src={mbTokenLogo} alt="mb Token"/>
                <h2>MBToken</h2>
            </div>
            <div className='icon-div'>
                <img src={metaMaskLogo} alt="meta mask" className='rs-half'/>
                <h2> METAMASK</h2>
            </div>
            <div className='icon-div'>
                <img src={openSeaLogo} alt="Open sea" className='rs-half'/>
                <h2> OpenSea</h2>
            </div>
        </div>
    );
}

export default MidBanner