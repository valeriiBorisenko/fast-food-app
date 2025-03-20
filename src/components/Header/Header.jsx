
const Header = (props) => {

    const {theme, changeTheme} = props

    return (
        <header className="header">
            <button className="btn" onClick={changeTheme}></button>
        </header>
    )
}

export default Header;