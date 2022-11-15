import '../styles/nftsection.css';

import nftImg from '../assets/nftLogo.svg';

function NFTSection(){
    return (
        <div className="nft-section theme-color-bg">
                <div id='left-section'>
                    <div>
                        <h2>
                            Metabnb NFTs
                        </h2>
                    </div>
                    <div id='left-section-p'>
                        <p>Discover our NFT gift  cards collection. Loyal</p>
                        <p>customers gets amazing gift cards which are</p>
                        <p>traded as NFTs. These NFTs gives our customer</p>
                        <p>access to loads of our exclusive services.</p>
                    </div>
                    <div className='btn-div'>
                        <input value="Learn more" type="submit"/>
                    </div>
                </div>
                <div id="nft-img-div">
                    <img src={nftImg}/>
                </div>
            </div>
    );
}

export default NFTSection;