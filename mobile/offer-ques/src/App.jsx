import React, { useState } from 'react'
import st from './App.module.scss'
import Menu from './components/Menu/Menu'
import WindowQues from './components/WindowQues/WindowQues';




function App() {
  const [windowContentName, setWindowContentName] = useState('');
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  
  
  const openMenu = () => {
      setIsActiveMenu(true);
      setWindowContentName('');
  }

  return (
    <main>
        <div className={st.wrapper}>
            <button onClick={openMenu} className={st.open_menu}>MENU</button>
            {Boolean(windowContentName) && <WindowQues 
                                                      windowContentName={windowContentName} 
                                                      setWindowContentName={setWindowContentName}
                                                      setIsActiveMenu={setIsActiveMenu}/>}
            {isActiveMenu && <Menu 
                                  setWindowContentName={setWindowContentName} 
                                  setIsActiveMenu={setIsActiveMenu}/>}
        </div>
    </main>
  )
}

export default App
