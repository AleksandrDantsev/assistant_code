import { html } from "./html";
import { css } from "./css";
import { methodology } from "./methodology";
import { react } from "./react";
import { type_script } from "./type_script";
import { web } from "./web";
import { java_script } from "./java_script";
import { oop } from "./oop";
import { testing } from "./testing";

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
};

const category = Object.keys(navigationTopic);

const namingCategory = {
    "html": "HTML и вёрстка",
    "css": "CSS и препроцессоры",
    "methodology": "Методология",
    "react": "React",
    "type_script": "TypeScript",
    "java_script": "JavaScript",
    "oop": "ООП",
    "testing": "Тестирование",
    "web": "Web",
}





export { navigationTopic, category, namingCategory };
