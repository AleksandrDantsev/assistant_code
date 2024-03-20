oop = {
	"i": {
		"ques": "Основные принципы ООП",
		"result": 
'''
	1.Инкапсуляция - сокрытие деталей реализации объекта, чтобы защитить его
	внутреннее состояние от внешнего мира.

	2.Наследование - возможность создания новых классов на основе существующих, 
	что позволяет повторно использовать код.

	3.Полиморфизм - способность объектов с одинаковой интерфейсной частью 
	выполнять разные действия в зависимости от их типа.

		interface Camera {
		    function takePicture();
		}

		class MobilePhone implements Camera {
		    function takePicture() {
		        echo "Taking photo with mobile phone";
		    }
		}

		class DSLR implements Camera {
		    function takePicture() {
		        echo "Taking photo with DSLR";
		    }
		}

'''
	},

	"s": {
		"ques": "Что такое SOLID",
		"result": 
'''
	SOLID - это аббревиатура, обозначающая пять основных принципов, которые следует соблюдать 
	при разработке объектно-ориентированных программ:

	S - принцип единственной обязанности (Single Responsibility Principle): каждый класс 
	или модуль должен выполнять только одну конкретную обязанность.

	O - принцип открытости/закрытости (Open-Closed Principle): программы должны быть 
	открыты для добавления нового функционала, но закрыты для изменений.

	L - принцип подстановки Барбары Лисков (Liskov Substitution Principle): объекты в 
	программе могут быть заменены на их подтипы без нарушения функциональности.
	Если у нас есть класс A (не виртуальный, а вполне реально используемый в коде) 
	и отнаследованный от него класс B, то если мы заменим все использования класса A на B, 
	ничего не должно измениться в работе программы. Ведь класс B всего лишь расширяет 
	функционал класса A

	I - принцип разделения интерфейса (Interface Segregation Principle): интерфейсы должны 
	быть разделены на маленькие, специфические части.Это означает, что вместо создания одного 
	большого интерфейса для всей системы, лучше создать несколько меньших интерфейсов, 
	каждый из которых выполняет одну определенную функцию.
	ISP помогает уменьшить связанность между компонентами системы и упрощает тестирование 
	и отладку, поскольку каждый интерфейс имеет свою четко определенную цель.

	D - принцип инверсии зависимости (Dependency Inversion Principle): модули верхних 
	уровней не должны зависеть от модулей нижних уровней, а только указывать, что им нужно.
	Это означает, что при проектировании системы следует создавать абстракции для высокоуровневых 
	модулей и реализовывать их на низком уровне. Таким образом, система становится более 
	гибкой и легко изменяемой, поскольку изменения на высоком уровне не затрагивают 
	низкоуровневые компоненты и наоборот.
'''
	},

	"p": {
		"ques": "Разница между классовым и прототипным наследованием",
		"result": 
'''
	Классовое наследование - это механизм, при котором дочерний класс наследует все методы и 
	свойства родительского класса. При создании объекта дочернего класса создается также объект 
	родительского класса, и все изменения, сделанные в объекте дочернего класса, отражаются в 
	объекте родительского класса.

	Прототипное наследование, или наследование прототипов, - это механизм, который не создает 
	иерархию классов, а позволяет добавлять свойства и методы к объектам на лету. При этом не 
	создается новый класс, а просто добавляется новый метод или свойство к прототипу объекта. 
	Это делает код более гибким и легким для изменения.
'''
	},

	"d": {
		"ques": "Однонаправленный поток данных и двусторонняя связь данных",
		"result": 
'''
	Однонаправленный поток данных означает, что данные передаются в одном направлении. 
	Например, из веб-сервера в браузер. В этом случае данные идут только в одном 
	направлении - от сервера к клиенту.

	Двунаправленная связь данных означает, что данные могут передаваться в двух направлениях. 
	Например, между клиентом и сервером. В этом случае данные могут идти как от сервера к 
	клиенту, так и от клиента к серверу.
'''
	},

	"m": {
		"ques": "Что такое MVC",
		"result": 
'''
	MVC (Model-View-Controller) - это архитектурный паттерн, который разделяет приложение 
	на три основных компонента: модель, представление и контроллер.

	-Модель представляет собой слой, который отвечает за работу с данными и бизнес-логикой. 
	Она содержит объекты, которые представляют данные, и методы для работы с этими данными.

	-Представление (View) - это интерфейс пользователя, который отображает информацию, 
	полученную от модели. Он может быть представлен в виде HTML-страницы, мобильного приложения 
	или любого другого типа интерфейса.

	-Контроллер (Controller) - это промежуточный слой между моделью и представлением. 
	Он отвечает за обработку пользовательского ввода, обновление модели и обновление 
	представления в соответствии с изменениями в модели.

	MVC позволяет разделить приложение на логические блоки, что облегчает его разработку, 
	тестирование и поддержку.
'''
	},

	"k": {
		"ques": "Что такое каррирование (Currying)",
		"result": 
'''
	Каррирование - это процесс “разворачивания” функции с несколькими аргументами в 
	цепочку функций с одним аргументом.

	Например, у нас есть функция multiply которая принимает два аргумента:

	const multiply = (a, b) => a * b;

	Мы можем развернуть эту функцию в цепочку из двух функций с одним аргументом, используя каррирование:

	const curriedMultiply = a => b => a * b;
	const result = curriedMultiply(2)(3); // result == 6`
'''
	},

	"t": {
		"ques": "Статический метод класса (static)",
		"result": 
'''
	Статический метод класса может быть вызван без создания экземпляра класса. Он принадлежит 
	самому классу, а не конкретному экземпляру класса. Статические методы обычно используются
	для работы с общими ресурсами или для выполнения операций, которые не зависят от 
	конкретного экземпляра класса.

	Вызов статического метода осуществляется с использованием ключевого слова static и имени 
	метода в качестве аргумента. Например:

	MyClass.staticMethod();
'''
	},

	"n": {
		"ques": "Что такое паттерн, или шаблон проектирования",
		"result": 
'''
	Шаблон проектирования, или паттерн проектирования — это решение часто возникающей 
	проблемы или задачи в проектировании программного обеспечения. Шаблоны упрощают разработку 
	программного обеспечения, позволяя разработчикам использовать уже готовые решения для 
	типичных задач. Существует множество различных шаблонов, каждый из которых предназначен 
	для решения определенной проблемы или задачи.
'''

	},

	"n": {
		"ques": "Типы паттернов в ООП",
		"result": 
'''
	Паттерны в ООП можно разделить на несколько категорий:

	-Порождающие паттерны: Эти паттерны используются для создания объектов. Они включают 
	в себя паттерны Builder, Factory Method, Abstract Factory, Prototype и Singleton.

	-Структурные паттерны: Структурные паттерны определяют, как объекты связаны друг с другом. 
	Примеры структурных паттернов включают Adapter, Bridge, Composite, Decorator, Facade и Proxy.

	-Поведенческие паттерны: Поведенческие паттерны описывают, как взаимодействуют объекты. Примеры 
	поведенческих паттернов включают Chain of Responsibility, Command, Interpreter, Iterator, Mediator, 
	Memento, Observer, State и Strategy.

	-Паттерны параллельного программирования: Эти паттерны помогают управлять параллелизмом 
	в приложениях. Некоторые из них включают в себя Active Object, Basic Threading, Dataflow, 
	Event-Driven, Guarded Suspension, Pipes and Filters, Reactor и Thread Pool.
'''
	},

	"v": {
		"ques": "Как работает механизм прототипов в JavaScript",
		"result": 
'''
	Механизм прототипов в JavaScript работает путем наследования свойств и методов от 
	прототипов. Каждый объект в JavaScript имеет свой прототип, который определяет его 
	поведение и характеристики. Когда вы создаете новый объект, он получает свойства и 
	методы от своего прототипа. Если объект не имеет определенного свойства или метода, 
	то JavaScript ищет это свойство или метод в прототипе объекта и, если не находит, 
	то продолжает искать в прототипах родительских объектов, пока не найдет или не дойдет 
	до самого первого прототипа, Object.prototype. Если свойство или метод не найден ни 
	в одном из прототипов, то генерируется ошибка. Таким образом, механизм прототипов 
	позволяет JavaScript объектам наследовать свойства и поведение без использования 
	классической системы наследования классов.
'''
	},

	"x": {
		"ques": "Разница между императивным и декларативным подходами программирования",
		"result": 
'''
	Императивное программирование предполагает описание последовательности действий 
	для решения задачи. Это означает, что вы должны явно указывать, какие операции нужно 
	выполнить и в каком порядке. Императивное программирование обычно использует циклы, 
	условные операторы и другие конструкции для управления потоком выполнения программы.

	Декларативное программирование, с другой стороны, описывает задачу в терминах того, 
	что должно быть достигнуто, а не как это должно быть сделано. В декларативном программировании 
	вы определяете данные и правила, которым они должны удовлетворять, и программа автоматически 
	генерирует последовательность операций для достижения желаемого результата. Декларативное 
	программирование часто использует логические и математические выражения для описания задачи, 
	а также языки запросов и правил.

	Императивное программирование может быть более подходящим для решения задач, которые требуют 
	выполнения последовательности операций, таких как обработка данных или управление устройствами. 
	Декларативное программирование лучше подходит для задач, где важнее описать, что нужно получить, 
	а не как этого достичь, например, в системах баз данных или веб-приложениях.
'''
	},

	"r": {
		"ques": "Что такое реактивное программирование",
		"result": 
'''
	Реактивное программирование (reactive programming) — это подход к разработке программного 
	обеспечения, который фокусируется на обработке потоков данных в реальном времени. Этот 
	подход используется для создания систем, которые могут быстро реагировать на изменения 
	в данных и адаптироваться к ним.

	В реактивном программировании используются так называемые реактивные библиотеки, которые 
	позволяют обрабатывать данные в режиме реального времени без необходимости постоянного 
	обновления состояния системы. Это делает реактивное программирование идеальным для 
	создания масштабируемых и высокопроизводительных систем.
'''
	},

	"e": {
		"ques": "Разница между агрегацией и композицией",
		"result": 
'''
	Оба эти понятия относятся к принципам объектно-ориентированного проектирования, 
	но они имеют разные значения.

	Агрегация - это связь между объектами, при которой один объект (агрегат) включает в 
	себя другие объекты (части), но части не имеют прямой ссылки на агрегат. Агрегация 
	обычно используется для моделирования отношений “имеет” или “включает в себя”. Например, 
	автомобиль имеет колеса, двери и т.д.

	Композиция - это более сильная форма агрегации, при которой части имеют прямую ссылку 
	на агрегат и могут быть доступны через него. Композиция обычно используется для 
	моделирования более сильных связей между объектами, когда части являются неотъемлемой 
	частью целого. Например, человек имеет руки и ноги, которые являются его частями и 
	не могут существовать отдельно от него.
'''
	},
}
