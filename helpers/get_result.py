from os import system

def get_result(categories, category):
	system('cls||clear')
	result = categories[category.get("key")][category.get("answer")] 

	print("\n" + result["ques"] + "\n")
	print(result["result"] + "\n")
