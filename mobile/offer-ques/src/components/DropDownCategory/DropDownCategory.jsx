import React, { memo } from "react";
import st from "./DropDownCategory.module.scss";
import MenuButton from "../../UI/menu-button/MenuButton";
import { namingCategory } from "../../data/dataReduce";
import { category } from "../../data/dataReduce";


const DropDownCategory = memo(({setWindowContentName, setIsActiveMenu}) => {

    const setCategory = (e) => {
        if (e.target.tagName === "BUTTON") {
            setWindowContentName(e.target.id);
            setIsActiveMenu(false);
        }
    }

    return(
        <div className={st.dropDown}>
            <ul className={st.dropDown_list} onClick={setCategory}>
                {category.map(element => (
                    <li key={namingCategory[element]}>
                        <MenuButton text={namingCategory[element]} id={element} position="menu" />
                    </li>
                ))}
            </ul>
        </div>
    );
})

export default DropDownCategory;