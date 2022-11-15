import advCheckBox from '../assets/adventureCheckboxes.svg';


function NextAdvDiv(props) {

    return (
        <div className='flex-container-col nextAdvDiv'>
                <div>
                    <img src={props.divImg} alt="image 1" />
                </div>
                <div>
                    <div className="flex-container-row">
                        <p>Desert King</p>
                        <p><b>1MBT per night</b></p>
                    </div>
                    <div className="flex-container-row">
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <div>
                        <img src={advCheckBox} alt="ratings"/>
                    </div>
                </div>
            </div>
    );
}

export default NextAdvDiv;