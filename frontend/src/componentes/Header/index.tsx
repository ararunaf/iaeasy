import logo from '../../assets/img/imgGenesisC.png'

import './styles.css'
function Header() {
    return (
        <header>
            <div className="gen-logo-container">
                <img src={logo} alt="Gênesis"/>

            </div>
        </header>
    )
}

export default Header