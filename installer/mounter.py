import os

installers_info = '''
	1-Init
	2-Framework (vite)
	3-Jest
	4-React Router
	5-Redux
	6-Axios
	7-React Testing Library
'''

installers_command = {
		"1": "npm init",
		"2": "npm create vite@latest && cd project && npm i",
		"3": "npm install --save-dev jest",
		"4": "npm i react-router-dom",
		"5": "npm install @reduxjs/toolkit",
		"6": "npm install axios",
		"7": "npm install --save-dev @testing-library/react"
	}



def decompose(request: str) -> str:
	split = request.split("|")
	result_req = ''

	for i, partial in enumerate(split):
		result_req += installers_command.get(partial.strip()) + (" && " if i < len(split) - 1 else '')

	return result_req



def mounter():
	url = input('url: ')
	cut_url = url.split("\\")[-1]

	manage_cmd = input(cut_url + f">: Выберите установщик :\n {installers_info}")
	opted_inst = decompose(manage_cmd)

	os.system(f"cd {url} && {opted_inst}")






