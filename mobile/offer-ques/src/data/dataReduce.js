import html from "./html.json";
import css from "./css.json";
import react from "./react.json";
import type_script from "./type_script.json";
import web from "./web.json";
import java_script from "./java_script.json";
import oop from "./oop.json";
import testing from "./testing.json";
import methodology from "./methodology.json";
import vue from "./vue.json";


const navigationTopic = {
    html: html,
    css: css,
    methodology: methodology,
    react: react,
    type_script: type_script,
    web: web,
    java_script: java_script,
    oop: oop,
    testing: testing,
    vue: vue,
};

const category = Object.keys(navigationTopic);

const namingCategory = {
    html: "HTML и вёрстка",
    css: "CSS и препроцессоры",
    methodology: "Методология",
    react: "React",
    type_script: "TypeScript",
    java_script: "JavaScript",
    oop: "ООП",
    testing: "Тестирование",
    web: "Web",
    vue: "Vue",
};

export { navigationTopic, category, namingCategory };
