import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [theme, setTheme] = useState("dark")

  const handleChangeTheme = () => {
    setTheme(theme === "dark"? "light": "dark")
  }

  return (
    <Fragment>
      <Header theme={theme} changeTheme={handleChangeTheme} />
    </Fragment>

  )
}

export default App
