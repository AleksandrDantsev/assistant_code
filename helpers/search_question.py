
def search_question(word, answers_obj) -> bool:
	if word.startswith('/') or word.startswith('.'):
		word_search = word[1:].lower()
		hash_found_answer = {}

		flag = False

		for topic, obj_val in answers_obj.items():
			for key, value in obj_val.items():
				if word_search in str(value).lower():
					flag = True
					hash_found_answer[topic[0] + key] = value
					print(topic[0] + key, value["ques"])

		if flag:
			code_answer = input('\ncode: ')

			try:
				print(hash_found_answer[code_answer]['result'])
			except: 
				print("Введён неверный код вопроса")

		else: 
			print("Ничего не найдено")

		return "break"

	else:
		return word.lower()