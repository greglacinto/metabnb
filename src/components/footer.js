import '../styles/footer.css';

import metaFooterIcon from '../assets/footerMetaLogo.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';


function Footer() {
    return (
        <div className="footer">
            <div className='w-90'>
            <div className='flex-container-row footer-sub-div'>
                <div className='flex-container-col first-section'>
                    <div>
                        <img src={metaFooterIcon} alt="meta"/>
                    </div>
                    <div className='flex-container-row'>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={instagramIcon} alt="instagram"/>
                        <img src={twitterIcon} alt="twitter"/>
                    </div>
                    <div>
                        <p> &copy; 2022 Metabnb</p>
                    </div>
                </div>

                <div>
                    <ul className='flex-container-col'>
                        <p>Community</p>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex-container-col'>
                        <p>Places</p>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex-container-col'>
                        <p>About us</p>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>career</li>
                        <li>contact us</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;