java_script = {
	"i": {
		"ques": "Что такое DOM?",
		"result": 
'''
	DOM - это объектная модель документа, которую браузер
	создает в памяти компьютера на основании HTML-кода, 
	полученного им от сервера.
'''
	},

	"n": {
		"ques": "Типы узлов DOM?",
		"result": 
'''
	1.элемент
	2.атрибут
	3.текстовый узел
	4.комментарий
	5.сам документ
	6.узел типа документа  
'''
	},

	"m": {
		"ques": "Методы JavaScript для поиска элементов на странице",
		"result": 
'''
	1.querySelector
	2.querySelectorAll
	3.getElementById
	4.getElementsByClassName
	5.getElementsByTagName
	6.getElementsByName  
'''
	},

	"c": {
		"ques": "Свойства для перемещения по dom-дереву",
		"result": 
'''
	Получение текст-узлов и элементов
		1.childNodes, firstChild, lastChild - дочерние узлы и элементы
		2.previousSibling, nextSibling - соседние элементы

	Получение только элементов
		1.children , firstElementChild, lastElementChild  - дочерние узлы 
		и элементы
		2.previousElementSibling, nextElementSibling  - соседние элементы
		3.parentElement – родитель-элемент.
'''
	},

	"b": {
		"ques": "Что такое BOM?",
		"result": 
'''
	BOM - это объектная модель браузера, он нужен чтобы работать со всем, 
	кроме документа.

	Содержит такие объекты как:
	-navigator - даёт информацию о самом браузере и операционной системе,
	-location - позволяет получить текущий URL и перенаправить браузер 
	 по новому адресу

	Функции alert/confirm/prompt тоже являются частью BOM
'''
	},

	"e": {
		"ques": "Виды событий Event?",
		"result": 
'''
	События DOM присылаются чтобы уведомить код о том, что интересующие его
	действия произошли. События могут возникать в результате действий 
	пользователя, таких как использование мыши или изменение размера окна,
	изменения состояния	базовой среды (например, низкий заряд батареи 
	или мультимедийные события из операционной системы) и других причин.

	Например:
		-online: Браузер получил доступ к сети.
		-offline: Браузер потерял доступ к сети.
'''
	},

	"s": {
		"ques": "media выражения в JavaScript",
		"result": 
'''
	Они обеспечивают гибкость и сохраняют производтельность в стравнении 
	если мы будем вешать обработчики событий, проверять ими на размер
	экрана и т.д

	const mQuery = window.matchMedia('(min-width: 320px)')

	if (mQuery.matches) { 
    	// Выводим сообщение в консоль
   	 	console.log('Media query matched!') 
	}

	mQuery.addListener(myFunction) // Присоединить функцию прослушивателя
	при	изменении состояния
'''
	},

	"t": {
		"ques": "event.target и event.currentTarget",
		"result": 
'''
	event.target — это ссылка на исходный элемент на котором произошло 
	событие, в процессе всплытия он неизменен. 

	event.currentTarget — это текущий элемент до которого дошло всплытие,
	на нём сейчас выполняется обработчик.
'''
	},

	"l": {
		"ques": "события load и DOMContentLoaded",
		"result": 
'''
	DOMContentLoaded — происходит, когда браузер разобрал HTML-страницу
	и составил DOM-дерево;

	load — происходит, когда загрузилась и HTML
	страница, и все ресурсы для её отображения пользователю: стили, 
	картинки и так далее.
'''
	},

	"q": {
		"ques": "Метод EventTarget.addEventListener()",
		"result": 
'''
	addEventListener принимает 3 параметра:
		1. Тип события
		2. Коллбэк-функцию
		3. Объект-опции:
				-{once: Boolean} указывает, что обработчик должен быть 
				вызван не более одного раза после добавления. Если 
				true, обработчик автоматически удаляется при вызове.
'''
	},

	"x": {
		"ques": "JSON и XML",
		"result": 
'''
	Они позволяют стандартизированно обмениваться данными между различными
	приложениями, платформами или системами.

	Отличия:
		-XML представляет данные в виде дерева, а в JSON используется система 
		на основе пар «ключ-значение»

		-JSON поддерживает только ограниченный диапазон типов данных, таких 
		как строки, числа и объекты.XML более гибкий и поддерживает сложные
		типы данных, такие как двоичные данные и временные метки.

		-Синтаксический анализ JSON безопаснее, чем XML.
'''
	},

	"h": {
		"ques": "Как узнать об использовании метода event.preventDefault()?",
		"result": 
'''
	Для этого мы можем использовать свойство event.defaulPrevented, 
	которое возвращает логическое значение, служащее индикатором применения 
	к элементу метода event.preventDefault.

	if (event.target.tagName === "A") {
    	log.innerText = event.defaultPrevented
      	? `Sorry, but you cannot visit this link!\n${log.innerText}`
      	: `Visiting link…\n${log.innerText}`;
  	}
	}
'''
	},

	"o": {
		"ques": "Intersection Observer",
		"result": 
'''
	браузерный API, который позволяет асинхронно отслеживать пересечение
	элемента с его родителем или областью видимости документа и подгружать 
	дополнительные элементы по мере того как они попадают в область видимости

	const observer = new IntersectionObserver(callback, options)
'''
	},

	"u": {
		"ques": "URLSearchParams",
		"result": 
'''
	API для формирования строки поисковых параметров, которую потом можно
	использовать для формирования полного адреса.
'''
	},

	"td": {
		"ques": "Типы данных в JavaScript",
		"result": 
'''
	Числа, строки, булевые значения, null, undefined, объекты, symbol, массивы, date 
'''
	},

	"st": {
		"ques": "Strict mode",
		"result": 
'''
	В этом режиме запрещается использовать некоторые конструкции, которые
	могут привести к ошибкам, такие как автоматическое приведение типов
	или обращение к переменным, которые не были объявлены.Также в строгом
	режиме выполняется более строгая проверка типов при преобразовании 
	значений. Например, если вы попытаетесь преобразовать строку в число,
	то получите ошибку, если строка не может быть преобразована в число.
	В общем, строгий режим помогает вам писать более надежный и безопасный код,
 	предотвращая некоторые типичные ошибки.
'''
	},

	"f": {
		"ques": "Разница между function declaration и function expression",
		"result": 
'''
	-Function declaration создается до выполнения кода, а функция 
	expression создается во время выполнения

	-Функция declaration может быть вызвана до ее определения, тогда
	как функция expression должна быть определена до ее вызова.

	-Function declaration - именованная, Function expression - анонимная
'''
	},

	"0": {
		"ques": "Разница между null и undefined",
		"result": 
'''
	-undefined - это ключевое слово в JavaScript, которое означает
	отсутствие значения.undefined обычно используется для переменных,
	которые не были созданы

	-null - это значение, которое может быть присвоено переменной 
	или свойству объекта. Оно указывает на то, что значение не было 
	определено или было удалено.
'''
	},

	"ti": {
		"ques": "Типы таймеров в JavaScript",
		"result": 
'''
	В JavaScript есть два основных типа таймеров:

	setTimeout - запускает функцию или код через определенное 
	количество миллисекунд.

	setInterval - запускает функцию или код периодически с 
	определенным интервалом в миллисекундах.
'''
	},

	"p": {
		"ques": "Поднятие (Hoisting)",
		"result": 
'''
	Поднятие (hoisting) в JavaScript — это процесс, во время которого
	JavaScript engine «поднимает» все объявления переменных и функций
	в начало блока кода. Это значит, что хотя объявление переменной
	или функции может находиться внутри блока кода, на самом деле оно
	обрабатывается и выполняется до того, как блок кода начнет 
	выполняться.Поднятие может вызвать некоторые интересные эффекты,
	такие как возможность использовать переменную или функцию до того,
	как она будет определена, или возможность использовать функцию до
	её вызова. Однако, важно понимать, что поднятие не влияет на порядок
	выполнения кода — блок кода всё равно будет выполняться сверху вниз.
'''
	},

	"sc": {
		"ques": "Область видимости (Scope)",
		"result": 
'''
	Область видимости (scope) в JavaScript определяет, какие переменные 
	и функции доступны в данном месте кода. Когда мы объявляем переменную
	или функцию, мы определяем ее область видимости

	Есть несколько уровней области видимости в JavaScript:

	Глобальная область видимости - это самая широкая область видимости, которая
 	включает все переменные и функции, определенные вне функций или блоков кода.
  	Эти элементы доступны везде в коде.

  	Локальная область видимости - это область видимости внутри функций или
   	блоков кода. Элементы, определенные внутри функции или блока, доступны
    только внутри этой функции или блока.

	Функциональная область видимости - это область видимости внутри функции.
	Элементы, определенные внутри функции, доступны только внутри этой функции.
'''
	},

	"2": {
		"ques": "Разница между var, let и const",
		"result": 
'''
	Область видимости: var может иметь глобальную или локальную
	внеблочную область видимости, в то время как let и const имеют
	только локальную область видимости.

	Переопределение: var можно переопределить, в то время как let
	и const нельзя.	Константность: const предназначено для создания
	констант, которые нельзя изменить, в то время как var и let 
	могут быть изменены.

	Синтаксис: var используется для создания переменных, let — для 
	создания локальных переменных, а const — для создания констант.
'''
	},

	"z": {
		"ques": "Замыкание (Closure)",
		"result": 
'''
	Замыкание t - это функция, которая имеет
	доступ к переменным из внешней области видимости.
'''
	},

	"th": {
		"ques": "this в JavaScript",
		"result": 
'''
	В JavaScript «this» используется для обращения к текущему 
	экземпляру объекта или контекста, в котором он используется.
	Обычно это относится к текущему экземпляру объекта, для которого
	вызывается метод или функция. Однако значение «this» можно
	изменить, привязав его или вызвав функцию с другим значением «this».
'''
	},

	"mn": {
		"ques": "Что такое чистая функция",
		"result": 
'''
	Чистая функция - это функция, которая удовлетворяет следующим условиям:

	Она не имеет побочных эффектов. Это означает, что она не изменяет
	состояние внешнего мира, а только возвращает результат.
	Ее результат зависит только от ее входных параметров. Это означает,
	что если входные параметры не изменяются, то и результат функции
	не изменится. Она не выполняет никаких асинхронных операций, таких как
	чтение из файла или обращение к базе данных. Если ей нужны такие
	операции, она должна принимать их в качестве параметров.
'''
	},

	"fc": {
		"ques": "Почему в JS функции называют объектами первого класса",
		"result": 
'''
	В JavaScript функции являются объектами первого класса, что означает,
	что они могут быть переданы как аргументы другим функциям, возвращены
	из других функций и присвоены переменным или свойствам объектов. Это 
	позволяет создавать гибкие и мощные системы, поскольку функции могут
	быть обработаны и использованы как любые другие данные.
'''
	},

	"pm": {
		"ques": "Псевдомассив arguments",
		"result": 
'''
	Псевдомассив arguments - это специальный массив в JavaScript, который
	содержит все аргументы, переданные в функцию. Он доступен внутри
	функции и позволяет обращаться к аргументам без необходимости
	указывать их имена.

	function func1(a, b, c) {
  		console.log(arguments[0]);
  	// Expected output: 1

  	console.log(arguments[1]);
  		// Expected output: 2

  	console.log(arguments[2]);
  		// Expected output: 3
}

func1(1, 2, 3);

'''
	},

	"hn": {
		"ques": "Разница между host-объектами и нативными объектами",
		"result": 
'''
	Host-объекты - это объекты, предоставляемые средой исполнения
	(браузер, движок Node.js и т.д.), в то время как нативные объекты - это
	встроенные в язык объекты, такие как массивы, строки, числа и т.д.

	Host-объекты обычно имеют специфические для данной среды методы и 
	свойства, позволяющие работать с этой средой. Например, объект window
	в браузере предоставляет методы для работы с окнами, навигацией
	по истории и т.д.

	Нативные объекты, напротив, имеют стандартизированные методы и 
	свойства, которые работают одинаково в любой среде исполнения 
	JavaScript. Например, метод sort() для массива работает одинаково
	в любом окружении.
'''
	},

	"pl": {
		"ques": "Прототипное наследование",
		"result": 
'''
	Прототипное наследование - это механизм наследования в JavaScript,
	который позволяет объектам наследовать свойства и методы от других
	объектов без использования классической иерархии классов. Он основан
	на концепции прототипов, которые представляют собой объекты, содержащие
	свойства и методы, которые могут быть унаследованы другими объектами.
	При прототипном наследовании новый объект не наследует напрямую свойства
 	и методы другого объекта, а вместо этого создается связь между прототипами
  	объектов, которая позволяет новому объекту использовать свойства и методы
   	родительского объекта. Это делает прототипное наследование более гибким 
   	и эффективным, чем классическое наследование, и позволяет создавать
   	более модульные и масштабируемые приложения.
'''
	},

	"na": {
		"ques": "NaN - это",
		"result": 
'''
	это специальное значение в JavaScript, которое используется для 
	обозначения некорректных результатов вычислений.

	проверить, является ли значение числом или NaN, вы можете 
	использовать метод isNaN:
'''
	},

	"w": {
		"ques": "Объектная обертка (Wrapper Objects)",
		"result": 
'''
	Объектные обертки - это объекты в JavaScript, которые служат
	“контейнерами” для примитивных значений. Например, когда вы 
	создаете новый примитивный тип данных, такой как число или строку,
	JavaScript автоматически создает объектную обертку для этого значения.
	Объектные обертки предоставляют дополнительные методы и свойства для работы
 	с примитивными значениями, такие как форматирование строки, сравнение 
 	чисел и т. д. Они также могут иметь свои собственные свойства и методы,
 	специфичные для конкретного типа объектной обертки.
'''
	},

	"ar": {
		"ques": "Проверить, является ли значение массивом",
		"result": 
'''
	Array.isArray(yourVariable)
	val.constructor === Array
	Object.prototype.toString.call(val) === '[object Array]'
'''
	},

	"bu": {
		"ques": "boxing/unboxing",
		"result": 
'''
	Boxing - это процесс преобразования примитивного типа данных (например,
	числа или строки) в объект. В JavaScript это происходит автоматически,
	когда вы работаете с примитивами как с свойствами объекта или аргументами
	функции. 

	Unboxing - это обратный процесс, когда из объекта извлекается примитивное
	значение. Это также происходит автоматически при использовании объекта в
	качестве аргумента функции или свойства другого объекта.

'''
	},

	"ih": {
		"ques": "Разница между оператором in и методом .hasOwnProperty()",
		"result": 
'''
	Оператор in используется для проверки наличия свойства или индекса
	в объекте или массиве. 

	Метод Object.hasOwnProperty() используется для проверки, было ли
	указанное свойство явно указано при создании объекта.

'''
	},

	"ds": {
		"ques": "Разница между глубокой (deep) и поверхностной (shallow) копиями",
		"result": 
'''
	Поверхностное копирование - это создание копии данных на самом
	верхнем уровне. Оно просто присваивает ссылку на исходный объект другому
	объекту. При изменении данных в одном объекте, второй тоже меняется,
	потому что они оба ссылаются на один и тот же участок памяти.

	Глубокое копирование - это копирование всех данных внутри объекта или
	массива. При этом создаются новые данные, а исходные остаются без изменений.

	Для создания глубокой копии объекта:
		-JSON.parse(JSON.stringify(obj))
		-Рекурсивно
		-Библиотеки
'''
	},

	"ch": {
		"ques": "Цепочка вызовов функций (chaining)",
		"result": 
'''
	Цепочка вызовов функций - это способ вызова нескольких функций 
	последовательно, когда результат выполнения одной функции передается
	в качестве аргумента следующей функции

	const get = {
	  r() {
	    console.log("r")
	    return this
	  },
	  a() {
	    console.log("a")
	    return this
	  },
	  d() {
	    console.log("d")
	    return this
	  },
	  v() {
	    console.log("v")
	    return this
	  },
	}

	get.r().d().a().v())

'''
	},

	"uv": {
		"ques": "Что такое необъявленная переменная",
		"result": 
'''
	Необъявленная переменная - это переменная, которая была использована
	в коде без предварительного объявления. В некоторых случаях это
	может привести к ошибке, а в некоторых - нет. В JavaScript, если
	переменная используется до того, как она была объявлена, она будет
	создана автоматически. Однако это не рекомендуется, так как может
	привести к ошибкам и непредвиденному поведению кода.
'''
	},

	"af": {
		"ques": "Как передаются параметры в функцию: по ссылке или по значению",
		"result": 
'''
	В JavaScript параметры передаются по значению. Это значит, что
	при вызове функции создается копия аргумента и эта копия передается
	в функцию. Любые изменения, которые вы делаете с аргументом внутри
	функции, не влияют на оригинальный аргумент.
	Но если аргумент является ссылкой на объект (например, массив), 
	то изменение этого объекта внутри функции повлияет на оригинал,
	так как объект является ссылкой на данные, а не копией.
'''
	},

	"po": {
		"ques": "Что такое прототип объекта в JavaScript",
		"result": 
'''
	Прототип объекта в JavaScript — это объект, который содержит
	свойства и методы, доступные для всех объектов данного класса.
	Прототип определяет поведение объекта и позволяет добавлять новые
	свойства и методы без изменения исходного кода класса.

	
'''
	},

	"oc": {
		"ques": "Как работает метод Object.create()",
		"result": 
'''
	Метод Object.create создает новый объект, который наследует
	свойства и методы от указанного прототипа.
	Вот как это работает:

	-Сначала создается пустой объект ({}).
	-Затем этот объект связывается с прототипом, который указан в
	качестве аргумента метода (Object.create(prototype)).
	-После этого возвращается созданный объект.

	Таким образом, мы получаем новый объект, который имеет доступ ко всем
	свойствам и методам прототипа, но при этом не наследует ничего лишнего.
'''
	},

	"fs": {
		"ques": "Object.freeze() и Object.seal()",
		"result": 
'''
	Метод Object.freeze() делает объект неизменяемым. Это означает, 
	что вы не можете добавлять или удалять свойства из объекта, а также
	изменять значения существующих свойств.

	Метод Object.seal() делает объект доступным только для чтения. Это 
	означает, что вы можете добавлять и удалять свойства из объекта,
	но не можете изменять значения уже существующих свойств.
'''
	},

	"ms": {
		"ques": "Плюсы и минусы использования use strict",
		"result": 
'''
	Плюсы:
		-Повышает производительность и безопасность кода, предотвращая
		некоторые виды ошибок.
		-Улучшает читаемость кода, делая его более строгим и однозначным.
		-Помогает избежать проблем с совместимостью, поскольку не все 
		браузеры поддерживают все возможности стандарта ES6.

	Минусы:
		-Может замедлить выполнение кода, особенно на старых браузерах.
		-Некоторые функции могут работать по-разному в строгом режиме и обычном.
		-Не все инструменты разработки и тестирования поддерживают строгий режим.
'''
	},

	"im": {
		"ques": "Плюсы и минусы иммутабельности",
		"result": 
'''
	Плюсы:
		-Простота: Неизменные объекты просты для понимания и использования.
		-Производительность: Неизменяемые данные могут быть оптимизированы 
		и кэшированы, улучшая производительность.
		-Безопасность: Неизменность предотвращает множество ошибок,
		включая ошибки связанные с изменением данных.
		-Функциональное программирование: Неизменяемые данные идеально
		подходят для функционального программирования.
		-Меньше ошибок: Неизменяемые объекты менее подвержены случайным
		изменениям, уменьшая вероятность ошибок.

	Минусы:
		– Сложность: Работа с неизменяемыми объектами может быть сложной,
		  особенно когда присутствуют сложные зависимости.
		– Память: Создание новых объектов для каждой операции может
		  использовать больше памяти.
		– Отладка: Отладка кода может быть сложнее, когда данные изменяются
		  во время выполнения.
		– Ошибки: После возникновения ошибки, может быть сложно вернуть 
		  систему в рабочее состояние.
'''
	},

	"to": {
		"ques": "Типы ОБЪЕКТОВ JavaScript",
		"result": 
'''
	-Строковые объекты.
	-Числовые объекты
	-Логические объекты
	-Объектные литералы
	-Массивы 
'''
	},

	"er": {
		"ques": "Типы ошибок в JavaScript",
		"result": 
'''
	Есть несколько типов ошибок в JavaScript:
	-Синтаксические ошибки - возникают при неправильном написании кода. 
	 JavaScript обнаруживает такие ошибки и сообщает о них при выполнении кода.

	-Семантические ошибки - это ошибки в логике программы. Они могут возникать 
	 из-за неправильных операторов, отсутствующих переменных и т. д. Такие ошибки
	 могут приводить к неправильному выполнению кода.

	-Ошибки времени выполнения - это ошибки, возникающие во время выполнения кода.
	 Примеры таких ошибок: попытка обращения к несуществующей переменной, вызов 
	 неопределенной функции и т. п.

	-Ошибки безопасности - это ошибки, связанные с безопасностью веб-приложений. 
	 Например, SQL-инъекции, XSS-атаки и т. д.

	-Ошибки производительности - это ошибки, связанные с низкой 
	 производительностью приложения. Они могут возникать из-за неправильного 
	 использования памяти, неэффективного кода и т. д.
'''
	},

	"tt": {
		"ques": "Разница между typeof и instanceof?",
		"result": 
'''
	instanceof — это булево выражение, которое позволяет проверить, 
	принадлежит ли объект определенному классу или его подклассу

	typeof - определяет тип
'''
	},

	"sd": {
		"ques": "JavaScript статически, или динамически типизированный язык",
		"result": 
'''
	JavaScript является динамически типизированным языком. Это означает,
	что типы переменных определяются во время выполнения, а не во время
	компиляции, как в статически типизированных языках.
'''
	},

	"re": {
		"ques": "Регулярное выражение (Regular Expression)",
		"result": 
'''
	Регулярные выражения - это мощный инструмент для работы с текстовыми
	данными в JavaScript. Они позволяют задавать шаблоны для поиска,
	замены или проверки текста. С помощью регулярных выражений можно
	выполнять различные операции, такие как проверка на соответствие
	формату email, удаление лишних пробелов, замена строк и многое другое
'''
	},

	"pf": {
		"ques": "Что такое полифил (polyfill)",
		"result": 
'''
	Полифил - это код, который добавляет функциональность, отсутствующую
	в текущем окружении. Он используется для обеспечения совместимости
	с более новыми стандартами и возможностями, чтобы приложение могло
	работать на разных платформах и браузерах.
'''
	},

	"es": {
		"ques": "expression и statement",
		"result": 
'''
	Выражения в JavaScript - это конструкции, которые возвращают 
	значение. К ним относятся арифметические операции, вызовы функций, 
	операторы сравнения и т.д. Выражения используются в коде для получения
	значений, выполнения операций и проверки условий.

	Инструкции в JavaScript - это команды, которые выполняют определенные
	действия. К ним относятся операторы присваивания, вызовы функций, 
	условные операторы и т.д. Инструкции используются для управления 
	потоком выполнения программы и выполнения различных операций.
'''
	},

	"lm": {
		"ques": "Типы утечек памяти в JavaScript",
		"result": 
'''
	-Циклы событий: Когда обработчик события не удаляется после его
	 срабатывания, это может привести к утечке памяти.

	-Дублирование DOM: Если элементы DOM создаются и не удаляются, это
	 может привести к накоплению памяти.

	-Использование setInterval или setTimeout без clearInterval или 
	 clearTimeout может привести к утечке, если функция, указанная в 
	 аргументе, не завершается.

	-Неправильное использование переменных: Если переменная не 
	 уничтожается, это может вызвать утечку памяти.

	-Использование глобальных переменных: Если глобальные переменные 
	 не удаляются, они могут накапливать память.
'''
	},

	"ob": {
		"ques": "Разница между примитивом и объектом",
		"result": 
'''
	Примитивы - это базовые типы данных, такие как числа, строки, булевы 
	значения и null. Они занимают меньше памяти и обрабатываются быстрее,
	чем объекты. Примитивы не могут иметь свойств или методов, они всегда
	имеют одно и то же значение.

	Объекты - это сложные структуры данных, которые могут иметь свойства
	и методы. Объекты могут быть созданы с помощью литералов объектов или
	с использованием конструкторов классов. Объекты занимают больше памяти,
	чем примитивы, но они могут иметь более сложную структуру и поведение
'''
	},

	"no": {
		"ques": "Почему typeof null возвращает object",
		"result": 
'''
	Потому что null является объектом в JavaScript. Хотя null не имеет
	типа (typeof null возвращает “object”), он все равно является 
	объектом, поскольку null === {} возвращает true.
'''
	},

	"pr": {
		"ques": "Зачем нужен конструктор Proxy?",
		"result": 
'''
	Конструктор Proxy позволяет создать прокси-объект, который может
	быть использован для перехвата и изменения действий, выполняемых
	с оригинальным объектом. Это может быть полезно для создания классов
	с переопределением методов, для реализации AOP (Aspect-Oriented 
	Programming, аспектно-ориентированное программирование), а также 
	для обхода защиты private и protected членов класса.
'''
	},

	"as": {
		"ques": "Разница между синхронными и асинхронными функциями",
		"result": 
'''
	Синхронные функции блокируют выполнение кода до тех пор, пока они не
	закончат свою работу. Это может привести к “замораживанию” интерфейса,
	если функция занимает много времени для выполнения.
	Асинхронные функции позволяют выполнять код, не блокируя его. Это полезно
	для выполнения длительных операций, таких как загрузка данных из сети, без 
	“замораживания” интерфейса. Асинхронные функции обычно используют механизм
	обратных вызовов или promises для уведомления о завершении операции.
'''
	},

	"aj": {
		"ques": "AJAX",
		"result": 
'''
	AJAX (Asynchronous JavaScript and XML) - это технология, которая 
	позволяет веб-приложениям получать данные с сервера без необходимости
	перезагрузки всей страницы. AJAX использует JavaScript для отправки 
	запросов на сервер и получения ответов в виде данных, которые затем
	могут быть отображены на странице. Это позволяет создавать более
	интерактивные и динамичные веб-приложения, которые могут обновлять
	данные без полной перезагрузки страницы.
'''
	},

	"sp": {
		"ques": "Что такое same-origin policy в контексте JavaScript",
		"result": 
'''
	Same-origin policy - это политика безопасности в браузере, которая
	ограничивает доступ JavaScript к ресурсам на других доменах. 
	Она предотвращает выполнение скриптов с одного домена на другом домене,
	чтобы предотвратить межсайтовый скриптинг (Cross-Site Scripting, XSS).
	Однако, существуют исключения, когда same-origin policy может быть 
	отключена, например, с использованием CORS (Cross-Origin Resource Sharing).
'''
	},

	"ma": {
		"ques": "Разница между микро и макрозадачами в event loop",
		"result": 
'''
	Микрозадачи - это короткие задачи, которые требуют небольшого количества
	ресурсов и могут быть выполнены быстро. Например, к микрозадачам можно
	отнести обновление DOM, вычисление простых математических операций и т.д.
	Микрозадачи выполняются в очереди микрозадач и не блокируют главный поток
	выполнения.

	Макрозадачи - это более сложные задачи, которые могут занимать больше
	времени на выполнение и блокировать главный поток выполнения, пока не 
	будут завершены. К макрозадачам относятся такие операции, как загрузка 
	больших файлов, выполнение тяжелых вычислений и т.п. Макрозадачи выполняются
	в отдельной очереди и не влияют на выполнение микрозадач
'''
	},

	"ps": {
		"ques": "Что такое промисы (Promises)",
		"result": 
'''
	Promises - это механизм в JavaScript, который позволяет выполнять 
	асинхронные операции без блокирования основного потока выполнения 
	программы. Promises используются, когда нам нужно выполнить какую-то
	операцию, но мы не хотим, чтобы она блокировала работу программы, 
	пока она не завершится. Например, когда мы загружаем данные из сети 
	или обрабатываем большой файл, мы можем использовать Promises, чтобы 
	программа продолжала работать, пока операция еще выполняется.
'''
	},

	"da": {
		"ques": "Плюсы и минусы использовании Ajax",
		"result": 
'''
	Плюсы:
	-Улучшение пользовательского опыта - Ajax позволяет веб-страницам
	 обновляться частями, что делает их более интерактивными и быстрыми.
	-Уменьшение времени загрузки - поскольку Ajax загружает только 
	 необходимые данные, а не всю страницу, время загрузки уменьшается.
	-Более эффективное использование пропускной способности - Ajax загружает
	 данные небольшими частями, что позволяет использовать пропускную 
	 способность более эффективно.

	Минусы:
	-Сложность разработки - разработка Ajax-приложений требует более глубоких
	 знаний о JavaScript и XML, чем разработка традиционных веб-страниц.
	-Проблемы с безопасностью - поскольку Ajax позволяет выполнять JavaScript
	 на удаленных серверах, это может представлять угрозу безопасности.
	-Неполная поддержка браузерами - некоторые браузеры могут не поддерживать
	 все функции Ajax, что может привести к проблемам с совместимостью.
'''
	},

	"ac": {
		"ques": "Подходы при работе с асинхронным кодом",
		"result": 
'''
	Callbacks: Это самый старый и простой подход. Он заключается в том,
	что когда одна функция закончила свою работу, она вызывает другую 
	функцию, которая продолжает выполнение программы.

	Promises: Это более современный подход, который позволяет писать код в
	последовательном стиле, без необходимости использовать обратные вызовы.

	Async/Await: Это новейший подход, который появился в ES2017. Он позволяет
	писать асинхронный код в стиле синхронный, используя ключевые слова async и await.
'''
	},

	"pp": {
		"ques": "Преимущества использовании промисов вместо колбэков",
		"result": 
'''
	Promises имеют несколько преимуществ перед колбэками:
	-Promise chaining: Promises позволяют связывать несколько операций вместе,
	 делая код более читаемым и понятным.

	-Порядок выполнения: Promises обеспечивают определенный порядок выполнения
	 операций, что может быть важно в некоторых случаях.

	-Отладка: Promises упрощают отладку, так как они позволяют видеть,
	 на какой стадии выполнения находится код.
'''
	},

	"cf": {
		"ques": "Что такое callback-функция? Что такое Callback Hell",
		"result": 
'''
	Callback-функция - это функция, которая выполняется после завершения
	другой функции.

	Callback Hell - это ситуация, когда в программе
	слишком много callback-функций, и это делает код сложным для понимания и поддержки.
'''
	},

	"aa": {
		"ques": "Что такое async/await",
		"result": 
'''
	Async/await — это современный способ написания асинхронного JavaScript-кода,
	который позволяет сделать его более читаемым и удобным для работы. С помощью
	async/await вы можете писать код, который выглядит как синхронный,
	но при этом будет выполняться асинхронно.
'''
	},

	"p0": {
		"ques": "Promise.all(), Promise.any() и Promise.race()",
		"result": 
'''
	-Promise.all() используется для ожидания завершения всех промисов из массива

	-Promise.any() - для ожидания завершения любого промиса из 
	 массива (возвращает индекс элемента)

	-Promise.race() - для ожидания завершения первого промиса из массива
'''
	},

	"p0": {
		"ques": "Плюсы и минусы асинхронного программирования",
		"result": 
'''
	Плюсы:
		-Улучшение производительности: Асинхронное программирование позволяет
		 выполнять несколько задач одновременно, что ускоряет работу приложения.
		-Повышение удобства использования: Асинхронные операции не блокируют 
		 основной поток выполнения кода, что улучшает пользовательский опыт, 
		 особенно при выполнении длительных операций.
		-Экономия ресурсов: Асинхронное программирование позволяет более 
		 эффективно использовать ресурсы компьютера, так как не требует постоянного 
		 переключения между задачами.
	Минусы:
		-Сложность: Асинхронное программирование может быть сложным для 
		 понимания и разработки, особенно для начинающих программистов.
		-Ошибки: Ошибки в асинхронном коде могут быть трудными для отладки,
		 так как ошибки могут возникать в неожиданных местах.
'''
	},

	"g": {
		"ques": "Что такое генераторы? Когда стоит использовать генераторы",
		"result": 
'''
	Генераторы - это функции в JavaScript, которые позволяют создавать 
	итерируемые объекты. Генераторы могут использоваться для создания 
	бесконечных коллекций данных, таких как строки или числа. Они также 
	могут использоваться для обработки больших объемов данных, когда 
	необходимо выполнять какие-либо действия с каждым элементом коллекции. 
	Генераторы обычно используются, когда необходимо обработать большие 
	объемы данных без загрузки их всех в память сразу.
'''
	},

	"k": {
		"ques": "Что такое дескрипторы свойств объектов",
		"result": 
'''
	Дескриптор свойства объекта - это объект, который представляет свойство 
	другого объекта. Он содержит информацию о свойстве, такую как его имя, 
	тип и значение. Дескрипторы свойств используются для доступа к свойствам 
	объекта и их изменения. Они также могут использоваться для добавления новых 
	свойств или удаления существующих.

		const person = {
		  name: 'John',
		  age: 25,
		};

		const ageDescriptor = {
		  get: (person) => person.age,
		  set: (person, age) => {
		    person.age = age;
		  },
		};
'''
	},

	"q1": {
		"ques": " В чем заключаются особенности геттеров и сеттеров",
		"result": 
'''
	Геттеры и сеттеры - это функции, которые позволяют контролировать доступ к свойствам 
	объекта. Они могут быть использованы для защиты данных или для реализации сложной 
	логики доступа к свойствам.

	Геттеры используются для получения значения свойства. Они обычно возвращают значение
	свойства, но могут выполнять дополнительные проверки или преобразования перед возвратом.

	Сеттеры используются для установки значения свойства. Они могут принимать одно 
	или несколько аргументов и могут выполнять различные проверки перед изменением 
	свойства. Сеттеры также могут использовать дополнительные параметры для указания, 
	следует ли заменить существующее значение или добавить новое значение к списку значений.
'''
	},
}

