import React, { useMemo, useState } from 'react'
import st from "./WindowQues.module.scss"
import { navigationTopic, namingCategory } from '../../data/dataReduce';
import MenuButton from '../../UI/menu-button/MenuButton';
import { find_matches, debounce } from '../../helpers/searchInData';



function WindowQues({windowContentName, setIsActiveMenu, setWindowContentName}) {
    const [idQues, setIdQues] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [scrollYTop, setScrollTop] = useState(0); 

    const writeValue = debounce((e) => {
        if (e.target) {
            const value = (e.target.value).trim().toLowerCase();
            setInputValue(value)
        }
    }, 800)

    const backPage = () => {
        setIdQues(null); 
        setIsActiveMenu(false)
        setTimeout(() => window.scrollTo(0, scrollYTop), 0)
    }

    const ArrayData = useMemo(() => {
            const optQues = (e) => {
                const dataName = (e.target.parentElement).getAttribute("data-name");

                if (dataName) setWindowContentName(dataName)
                if (e.target.id) {
                    setScrollTop(window.scrollY);
                    const id = e.target.id;
                    setIdQues(id);
                    window.scrollTo(0, 0)
                }
            }

            const data = inputValue ? find_matches(inputValue, navigationTopic) : 
                                      Object.entries(navigationTopic[windowContentName])


            return (
                <React.Fragment>
                    {data.length > 0 ? 
                        <ol className={st.list_ques} onClick={optQues}> 
                            {
                                data.map((element, i) => (
                                    <li key={element[0] + i} data-name={element[2] ? element[2] : ''}>
                                        <MenuButton id={element[0]} text={element[1]?.["ques"]}  />
                                    </li>
                                ))
                            }
                        </ol> : <div className={st.not_matches}>Совпадений не найдено</div>
                    }
                </React.Fragment>
            )
  
    }, [windowContentName, inputValue])

    const getAnswer = useMemo(() => {
        const answerObj = navigationTopic[windowContentName]
        if (idQues) {
            return (
                <article className={st.window_content__answer}>
                    <h1>{answerObj?.[idQues]?.['ques']}</h1>
                    <div className={st.window_content__text}><p>{answerObj?.[idQues]['result']}</p></div>
                </article>
            )
        }
    }, [windowContentName, idQues])

    return (
        <div className={st.window_content}>
            {!Boolean(idQues) && 
            <React.Fragment>
                <div className={st.input_search}>
                    <input className={st["input_search_input"]} 
                        type="text" 
                        onChange={writeValue} 
                        placeholder='Поиск по содержимому всех тем'/>
                </div>
                <h1 className={st.title_page}>
                    {namingCategory[windowContentName]}
                </h1>
            </React.Fragment>
            }
            {
            !idQues ? ArrayData : 
                <React.Fragment>
                    <button className={st.button_back} onClick={backPage}>BACK</button>
                    {getAnswer}
                </React.Fragment>
            }
        </div> 
    )
}

export default WindowQues
