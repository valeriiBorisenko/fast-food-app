import { Fragment, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [theme, setTheme] = useState("dark")

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  }

  return (
    <Fragment>
      <Header theme={theme} changeTheme={handleChangeTheme} />
      <Main theme={theme} />
      <Footer />
    </Fragment>

  )
}

export default App
