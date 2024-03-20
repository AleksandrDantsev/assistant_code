import React, { memo, useState } from "react";
import st from "./Menu.module.scss";
import MenuButton from "../../UI/menu-button/MenuButton";
import DropDownCategory from "../DropDownCategory/DropDownCategory";

const Menu = memo(({setWindowContentName, setIsActiveMenu}) => {
 
    return(
            <div className={st.menu_nav}>
                <ul className={st.menu_nav_list}>
                    <DropDownCategory setWindowContentName={setWindowContentName} 
                                      setIsActiveMenu={setIsActiveMenu}/>
                </ul>
             </div>

    );
})

export default Menu;