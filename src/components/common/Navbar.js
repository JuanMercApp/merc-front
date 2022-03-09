import { useState } from 'react';
import searchIcon from '../../utility/ic_Search@2x.png';
import mercLogo from '../../utility/Logo_ML@2x.png';
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

function Navbar () {
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const searchProduct = () => {
        navigate(`/items?q=${searchQuery}`, { replace: true });
    };

    return (
        <div className="navbar-flex">
            <img className="navbar-flex__logo" src={mercLogo} alt="Merc-App logo"/>
            <div className="navbar-flex__search-box">
                <input className="navbar-flex__input" value={searchQuery} onChange={handleSearchQueryChange}placeholder="Nunca dejes de buscar"></input>
                <button className="navbar-flex__search-button" onClick={searchProduct}><img src={searchIcon} className="navbar-flex__search-image" alt="Search product"/></button>
            </div>
        </div>
    );
}

export default Navbar;