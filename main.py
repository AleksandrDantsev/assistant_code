from helpers.define_selector import define_selector
from helpers.request import request
from helpers.get_result import get_result
from installer.mounter import mounter
from time import sleep
from define import categories
from os import system



def main():
	# mode = input("Выберите режим: Install | Info: ")

	# if mode.lower() == "info":
	while True:
		selector = request()

		try:
			while (True):
				category = define_selector(selector, categories)
				if category == "break":
					break
				else:
					get_result(categories, category)
		except:
			system('cls||clear')
			print("Неверный код ответа\n")

	# elif mode.lower() == "install":
		# mounter() 
	

		



		














if __name__ == "__main__":
	main()