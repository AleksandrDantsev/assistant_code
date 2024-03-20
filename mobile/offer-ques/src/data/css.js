const css = {
	"i": {
		"ques": "Что такое css?",
		"result": 
`
	css - это каскадные таблицы стилей,CSS используется для определения 
	стилей (правил) оформления документов — включая дизайн, вёрстку и 
	вариации макета для различных устройств и размеров экрана.
`
	},

	"p": {
		"ques": "Приоритеты селекторов",
		"result": 
`
	По убыванию:
	1.Important
	2.Инлайн стили
	3.ID
	4.Селектор классов
	5.Cелектор тегов
`
	},

	"e": {
		"ques": "Способы добавить CSS на страницу",
		"result": 
`
	1.Подключить файл к документу
	2.Прописать инлайн стили
	3.Прописать стили через тег style
`
	},

	"a": {
		"ques": "Позиционирование",
		"result": 
`
	1.static — дефолтное состояние
	2.absolute — данное значение задает абсолютное позиционирование элемента.
	3.fixed — фиксированное позиционирование относительно окна элемента.
	4.sticky — это совмещение относительного и фиксированного позиционирования. 
	5.relative — относительное позиционирование элемента.
`
	},

	"b": {
		"ques": "Блочная модель css",
		"result": 
`
	Блочная модель - это правила по которым браузер определяет размер 
	элемента на странице, его ширину и высоту

	Блочная модель состоит из нескольких CSS-свойств

	1.контентная часть 
	2.padding 
	3.margin 
	4.border
`
	},	

	"s": {
		"ques": "Cелектор и какие селекторы существуют",
		"result": 
`
	С помощью селекторов мы определяем, к каким элементам нужно применить
	стили, перечисленные внутри фигурных скобок.

	1.Селектор по тегу 
	2.Селектор по классу
	3.Селектор по id
	4.Универсальный селектор (*)
	5.Селекторы по атрибуту [attr]
`
	},	

	"sa": {
		"ques": "Что такое специфичность селектора?",
		"result": 
`
	Специфичность — это алгоритм, благодаря которому браузер
	определяет, какие именно стили из всего набора применить к элементу.

	Можно предсатвить любой селектор в виде трёх нулей: 0.0.0.

	Селекторы по идентификатору увеличивают первую цифру.
	Селекторы по классу, по атрибуту или псевдокласс увеличивают вторую цифру.
	Селектор по тегу или псевдоэлемент увеличивают третью цифру.

	#id .class tag
	    0. 0. 0  

	У атрибута style вес равен четырем цифрам(1.0.0.0), 
	соответственно вес больше всех 
	Можно увеличивать вес селекторов так: .tomato .tomato
`
	},	

	"r": {
		"ques": "Разница между Normalize.css и Reset CSS??",
		"result": 
`
	reset.css – как и видно по названию файла, сбрасывает большинство
	стилей браузера, которые в нем заданы по умолчанию

	normalize.css – этот файл не только задает стили по умолчанию 
	там где это необходимо, но и исправляет некоторые недостатки
	старых браузеров
`
	},	

	"k": {
		"ques": "Разница между классом и идентификатором?",
		"result": 
`
	Классы (class) - это механизм, позволяющий задавать одно и то
	же свойство стиля для нескольких элементов веб-страницы.

	Идентификаторы (id) - атрибут id указывает уникальный 
	идентификатор для элемента HTML (значение должно быть уникальным
 	в HTML-документе).

 	Поиск по классу выполняется за О(n), по id - за О(1)
`
	},

	"u": {
		"ques": "CSS спрайт?",
		"result": 
`
	CSS-спрайт – способ объединить много изображений в одно, чтобы:

	-Сократить количество обращений к серверу.
	-Загрузить несколько изображений сразу, включая те, которые 
	 понадобятся в будущем.
	-Если у изображений сходная палитра, то объединённое изображение 
	 будет меньше по размеру, чем совокупность исходных картинок.
`
	},

	"v": {
		"ques": "Вендорный префикс?",
		"result": 
`
	Вендорный префикс (vendor prefix) — приставка к свойству CSS,
	обеспечивающая поддержку браузерами, в которых определенная
	функция ещё не внедрена на постоянной основе (находится в стадии
	разработки или тестирования). 
	Пример вендорного префикса:	 -webkit- или -moz-.
`
	},

	"f": {
		"ques": "Что такое псевдоэлементы?",
		"result": 
`
	Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору,
	которое позволяет стилизовать определённую часть выбранного элемента

	::after
	::before
	::cue
	::first-letter
	::first-line
	::selection
	::slotted
	::backdrop 
	::placeholder 
	::marker
	::spelling-error
	::grammar-error 
`
	},

	"c": {
		"ques": "Схлопывание внешних отступов?",
		"result": 
`
	Отступы margin-top и margin-bottom иногда объединяются в один,
	с размером равным наибольшему из них (или размеру одного, если они равны)
`
	},

	"pr": {
		"ques": "css препроцессоры",
		"result": 
`
	CSS препроцессор (от англ. CSS preprocessor) — это надстройка над CSS,
	которая добавляет ранее недоступные возможности для CSS, с помощью 
	новых синтаксических конструкций.
	предоставляет удобные синтаксические конструкции для разработчика,
	чтобы упростить, и тем самым, ускорить разработку

	Less
	Sass (SCSS)
	Stylus
`
	},

	"q": {
		"ques": "Контекст наложения",
		"result": 
`
	Контекст наложения это концепция трёхмерного расположения 
	HTML-элементов вдоль оси Z по отношению к пользователю


`
	},

	"sp": {
		"ques": "Как с помощью CSS определить, поддерживается ли свойство в браузере?",
		"result": 
`
	Через CSS директиву под названием @supports.

	@supports (display: flex) {
   		/* Стили */
	}
`
	},

	"g": {
		"ques": "Глобальные ключевые слова в CSS?",
		"result": 
`
	Для всех свойств CSS, помимо их стандартных значений, можно задать
	значения в виде ключевых слов:

	-initial - сбрасывает все указанные значения свойства для конкретного
			   блока до этих самых значений по умолчанию.;
	-inherit - наследует стиль от родителя;
	-unset - сбрасывает значение до умолчания
	-revert - сбрасывает значение свойства до указанного в стилях браузера.
`
	},

	"cc": {
		"ques": "currentColor в CSS?",
		"result": 
`
	Используется для добавления существующего color, чтобы не
	дублировать цвет

	.element {
  		color: darkblue;
  		box-shadow: 0 0 5px currentColor;
	}
`
	},

	"fl": {
		"ques": "Фильтры в CSS?",
		"result": 
`
	
	Blur – размытие
	Brightness – яркость
	Contrast – контраст
	Grayscale – обесцвечивание
	Hue-rotate – замена цветов
	Invert – инверсия цветов
	Opacity – прозрачность
	Saturate – насыщенностьox-shadow: 0 0 5px currentColor;

`
	},

	"fl": {
		"ques": "Псевдокласс :invalid?",
		"result": 
`
	Применяется к полям формы, содержимое которых не соответствует 
	указанному типу. Например, для type="number" должно вводиться 
	число, а не буквы, для type="email" корректный адрес электронной почты.
`
	},

	"fl": {
		"ques": "Свойство display в CSS?",
		"result": 
`
	display влияет сразу на две вещи: на расположение самого бокса в потоке и 
	на расположение дочерних элементов внутри бокса.

	-none
	-flex
	-block
	-inline
	-inline-block
	-table

	list-item, run-in
`
	},

	"z": {
		"ques": "Свойство float в CSS?",
		"result": 
`
	Свойство float CSS указывает, что элемент должен быть взят из нормального 
	потока и помещён вдоль левой или правой стороны его контейнера, где текст
	и встроенные элементы будут обтекать его.

`
	},

	"tr": {
		"ques": "Свойство text-rendering?",
		"result": 
`
	Влияет на скорость и точность отрисовки шрифтов,

	auto Скопировать ссылку "auto"
	Значение по умолчанию. Браузер пытается самостоятельно угадать, в какой 
	момент отрисовки важна скорость вывода символов, в какой — читаемость, 
	а в какой — геометрическая точность.

	optimizeSpeed - при отрисовке текста браузер будет ставить в приоритет 
	именно скорость отрисовки, поэтому лигатуры и кернинг будут отключены.

	optimizeLegibility - используется в случае, когда важна не скорость 
	отрисовки, а удобочитаемость текста и визуальная красота сочетаний символов.

	geometricPrecision - основной приоритет при рендеринге текста — 
	геометрическая точность.

	.seelctor {
		 text-rendering: auto; 
	}

`
	},

	"td": {
		"ques": "Свойство text-decoration-skip-ink?",
		"result": 
`
	Свойство text-decoration-skip-ink управляет внешним видом верхнего
	и нижнего подчёркиваний.

`
	},

	"sg": {
		"ques": "Свойство scrollbar-gutter?",
		"result": 
`
	scrollbar-gutter решает проблему с «прыгающей» шириной контента при
	появлении или скрытии скроллбара.
`
	},

	"br": {
		"ques": "Краткая форма записи свойств?",
		"result": 
`
	Сокращённые свойства - это такие CSS-свойства, которые позволяют
	одновременно устанавливать значения нескольких других свойств.

	.btn {
  		background: red;
	}
`
	},

	"ct": {
		"ques": "Контейнерные запросы?",
		"result": 
`
	Контейнерные запросы похожи на медиа-запросы; единственная разница в том,
	что они делают контейнер или элемент отзывчивым на основе пространства, 
	доступного для контейнера, а не области просмотра всего экрана.
`
	},

	"m": {
		"ques": "prefers-reduced-motion?",
		"result": 
`
	Одно из значений директивы @media для проверки пользовательских
	настроек воспроизведения анимации.Медиа-запрос prefers-reduced-motion
	позволяет определить, отключена или уменьшена анимация в системе
	и применять стили CSS, которые это учитывают.
`
	},
}

export { css }


