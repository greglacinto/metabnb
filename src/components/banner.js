import '../styles/banner.css';

import bannerImg from '../assets/banner-img.svg';

function Banner(){
    return (
        <div className="banner-section w-90">
            <div id='left-div'>
                <div id='banner-main-text-div'>
                    <p className='banner-text'>Rent a <span className='text-purple'>Place</span> away from</p>
                    <p className='banner-text'><span className='text-purple'>Home</span> in the <span className='text-purple'>Metaverse</span></p>
                </div>
                <div id='banner-center-div'>
                    <p>we provide you access to luxury and affordable houses</p>
                    <p>in the metaverse, get a chance to turn your</p>
                    <p>imagination to reality at your comfort zone</p>
                </div>
                <div id='banner-input-div'>
                    <input placeholder='search for location' id='searchBox'/>
                    <input type='submit' value='search' id='searchBtn' className='theme-color-bg'/>
                </div>
            </div>
            <div id='right-div'>
                <img src={bannerImg}/>
            </div>
        </div>
    );
}

export default Banner;