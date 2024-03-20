from .search_question import search_question
from .show_category import show_category
from define import categories, first_letter_category
from os import system


def define_selector(request, category_list):
	if request != False:
		request_format = request[0]

		if request_format in first_letter_category:
			show_category(first_letter_category[request_format], category_list, request)

			second_step = input("\nКод вопроса: ").strip().lower()
			system('cls||clear')
			
			if search_question(second_step, categories) == 'break': 
				return "break"


			if second_step == "`": 
				system('cls||clear')
				return "break"

			else: return {
				"key": first_letter_category.get(request_format),
			 	"answer": second_step
			}

		else: print("Неверная категория\n")
	return 'break'