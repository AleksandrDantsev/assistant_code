import json
import sys
sys.path.append("..")
from answer_table.git import git
from answer_table.html import html
from answer_table.css import css
from answer_table.java_script import java_script
from answer_table.type_script import type_script
from answer_table.methodology import methodology
from answer_table.oop import oop
from answer_table.vue import vue
from answer_table.web import web
from answer_table.testing import testing
from answer_table.react import react



table = [
    git,
    css, 
    html, 
    java_script, 
    type_script, 
    methodology, 
    oop, 
    vue, 
    web, 
    testing, 
    react
]
table_string = [
    "git",
    "css",  
    "html",
    "java_script", 
    "type_script", 
    "methodology", 
    "oop", 
    "vue", 
    "web", 
    "testing", 
    "react"
]

def py_to_json():
    for i, module in enumerate(table):
        my_file = open(f"mobile/offer-ques/src/data/{table_string[i]}.json", "w")
        my_file.write(str(json.dumps(module)))
        my_file.close()