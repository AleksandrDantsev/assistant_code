def show_category(request, category_list, first_letter):
	for key, value in category_list[request].items():
		print(f"  {key}  -  {value['ques']}")
