import '../styles/navbar.css';

function NavBar() {
    return (
        <div>
            <div className='nav' style={{border : "solid red"}}>
                <ul>
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTs</li>
                    <li>community</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;