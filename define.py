from answer_table.html import html
from answer_table.react import react
from answer_table.css import css
from answer_table.web import web
from answer_table.java_script import java_script
from answer_table.testing import testing
from answer_table.vue import vue
from answer_table.oop import oop
from answer_table.methodology import methodology
from answer_table.type_script import type_script


categories = {
	"web": web,
	"html": html,
	"css": css,
	"java_script": java_script,
	"type_script": type_script,
	"react": react,
	"testing": testing,
	"vue": vue,
	"oop": oop,
	"methodology": methodology,
}

first_letter_category = {
	"w": "web",
	"h": "html",
	"c": "css",
	"s": "type_script",
	"j": "java_script",
	"r": "react",
	"t": "testing",
	"v": "vue",
	"o": "oop",
	"m": "methodology",
}