import '../styles/nextadventuresection.css';

import advImg1 from '../assets/advImg1.svg';
import advImg2 from '../assets/advImg2.svg';
import advImg3 from '../assets/advImg3.svg';
import advImg4 from '../assets/advImg4.svg';
import advImg5 from '../assets/advImg5.svg';
import advImg6 from '../assets/advImg6.svg';
import advImg7 from '../assets/advImg7.svg';
import advImg8 from '../assets/advImg8.svg';

import NextAdvDiv from './nextadvdiv';


function NextAdventureSection() {
    return (
        <div className='section nextAdvSection flex-container-col'>
            <div>
                <h1>
                    Inspiration for your next adventure
                </h1>
            </div>

            <div style={{border: 'solid'}} className="nextAdvSectionGrid">
                <NextAdvDiv divImg={advImg1} />
                <NextAdvDiv divImg={advImg2} />
                <NextAdvDiv divImg={advImg3} />
                <NextAdvDiv divImg={advImg4} />
                <NextAdvDiv divImg={advImg5} />
                <NextAdvDiv divImg={advImg6} />
                <NextAdvDiv divImg={advImg7} />
                <NextAdvDiv divImg={advImg8} />
            </div>

        </div>
        
    );

}

export default NextAdventureSection;