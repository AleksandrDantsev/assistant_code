from os import system
import sys
sys.path.append("C:/Users/Admin/Desktop/answers")
from define import first_letter_category, categories
from .search_question import search_question


def request():
	for key, val in first_letter_category.items():
		print(key +  " - " + val)

	request = input("\nСелектор вопроса: ")

	if request: 
		system('cls||clear')
		return search_question(request, categories)

