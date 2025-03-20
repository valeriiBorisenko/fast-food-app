
const Header = (props) => {

    const {theme, changeTheme} = props

    return (
        <header className="header container p-2">
            <button className="btn" onClick={changeTheme}>{theme === "dark" ? "Dark" : "Light"}</button>
        </header>
    )
}

export default Header;