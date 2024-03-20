import React, { memo } from "react";
import st from "./MenuButton.module.scss";


const MenuButton = memo(({text, id, position}) => {
    return(
        <button className={position === "menu" ? st.menu_button + ' ' + st.menu_popup : st.menu_button} 
                id={id || null}>
                {text}
        </button>
    );
})

export default MenuButton;