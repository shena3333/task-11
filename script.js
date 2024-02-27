// Фильтрация продуктов по категориям и цене: Дан массив продуктов, где каждый продукт описывается объектом
//  с полями name, category, и price. Напишите функцию, которая возвращает новый массив продуктов, относящихся к категории
//   "электроника" или "продукты питания", и имеющих цену меньше 500.
const products = [
    { name: "Ноутбук", category: "электроника", price: 450 },
    { name: "Яблоки", category: "продукты питания", price: 50 },
    { name: "Клавиатура", category: "электроника", price: 700 },
    { name: "Бананы", category: "продукты питания", price: 30 },
    { name: "Телевизор", category: "электроника", price: 800 },
    { name: "Хлеб", category: "продукты питания", price: 40 }
];
function filterProduct(products, category1 = 'электроника', category2 = 'продукты питания', needPrice = 500) {
    return products.filter((product) => (product.category === category1 || product.category === category2) && product.price < needPrice)
}
// Поиск студентов по оценкам и курсу: Дан массив объектов, представляющих студентов с полями name, grade (оценка),
//  и year (курс). Напишите функцию, которая возвращает имена студентов 2-го и 3-го курса, у которых оценка выше 4.
const students = [
    { name: "Иван", grade: 5, year: 2 },
    { name: "Светлана", grade: 4.5, year: 3 },
    { name: "Алексей", grade: 3, year: 1 },
    { name: "Мария", grade: 5, year: 3 },
    { name: "Дмитрий", grade: 2, year: 4 }
];
function filterSudents(students, year1 = 2, year2 = 3, grade = 4) {
    const needNameStudent = [];
    students
        .filter(student => (student.year === year1 || student.year === year2) && student.grade > grade)
        .map(newStudent => needNameStudent.push(newStudent.name));
    return needNameStudent;
}

// Фильтрация и группировка книг по авторам и жанрам: имеется массив книг, каждая книга описывается объектом с полями title, 
// author, и genre. Напишите функцию, которая возвращает объект, где ключи — это имена авторов, 
//а значения — массивы книг данного автора в жанрах "фантастика" или "мистика".
const books = [
    { title: "Книга 1", author: "Автор 1", genre: "фантастика" },
    { title: "Книга 2", author: "Автор 2", genre: "мистика" },
    { title: "Книга 3", author: "Автор 1", genre: "история" },
    { title: "Книга 4", author: "Автор 3", genre: "фантастика" },
    { title: "Книга 5", author: "Автор 2", genre: "мистика" }
];
function filterBooks(books, genre1='фантастика', genre2='мистика') {
    const authors = [];
    books.map(book => {
        if (!authors.includes(book.author)) {
            authors.push(book.author)
        }
    })
    const booksByAutor = {};
    let arrayTitle = [];
    authors.map(autor => {
        books
            .filter((book) => book.genre === genre1 || book.genre === genre2)
            .map(book => {
                if (autor === book.author) {
                    arrayTitle.push(book.title)
                }
            })
        booksByAutor[autor] = arrayTitle;
        arrayTitle = [];
    })
    return booksByAutor;
}

// Сортировка пользователей по возрасту и фильтрация по стране: Дан массив объектов, представляющих пользователей
//  с полями name, age, и country. Напишите функцию, которая возвращает новый массив пользователей, живущих в "Канаде" 
//  или "Мексике", отсортированный по возрасту в порядке убывания.
const users = [
    { name: "Анна", age: 25, country: "Канада" },
    { name: "Боб", age: 30, country: "Мексика" },
    { name: "Карл", age: 19, country: "США" },
    { name: "Диана", age: 22, country: "Мексика" },
    { name: "Елена", age: 29, country: "Канада" }
];
function filterUsers(users, country1 = 'Канада', country2 = 'Мексика') {
    return users
        .filter(user => user.country === country1 || user.country === country2)
        .sort((user1, user2) => user1.age - user2.age)
}

// Фильтрация задач по статусу выполнения и сложности: имеется массив задач, каждая задача описывается объектом с
//  полями title, completed (булево значение), и difficulty. Напишите функцию, которая возвращает названия невыполненных задач 
//  с уровнем сложности выше 3.
const tasks = [
    { title: "Задача 1", completed: false, difficulty: 4 },
    { title: "Задача 2", completed: true, difficulty: 5 },
    { title: "Задача 3", completed: false, difficulty: 2 },
    { title: "Задача 4", completed: false, difficulty: 5 }
];
function filterTasks(tasks, completed = false, difficulty = 3) {
    return tasks.filter(task => task.completed === completed && task.difficulty > difficulty)
}

// Поиск и фильтрация событий по дате и типу: Дан массив событий, где каждое событие описывается объектом
//  с полями name, date (строка в формате YYYY-MM-DD), и type. Напишите функцию, которая возвращает массив событий, 
//  происходящих после заданной даты и относящихся к типу "конференция" или "выставка".
const events = [
    { name: "Событие 1", date: "2024-01-01", type: "конференция" },
    { name: "Событие 2", date: "2024-02-15", type: "выставка" },
    { name: "Событие 3", date: "2024-03-01", type: "семинар" },
    { name: "Событие 4", date: "2024-04-20", type: "конференция" }
];


function filterEvents(events, needDate = '2024-02-01', type1 = 'конференция', type2 = 'выставка') {
    return events.filter((needEvent) => (needEvent.type === type1 || needEvent.type === type2) && needEvent.date > needDate)
}

// Фильтрация чисел по нескольким условиям: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий 
// числа, которые делятся на 2 или 3, но не на 5.
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25];
function filterNumbers(numbers, num1 = 2, num2 = 3, num3 = 5) {
    return numbers.filter(number => (number % num1 === 0 || number % num2 === 0) && number % num3 !== 0)
}

// Поиск автомобилей по марке и году выпуска: Дан массив автомобилей, каждый автомобиль описывается объектом с
//  полями model, make (марка), и year. Напишите функцию, которая возвращает модели автомобилей марки "Toyota" или "Ford", 
//  выпущенные после 2010 года.
const cars = [
    { model: "Camry", make: "Toyota", year: 2015 },
    { model: "Focus", make: "Ford", year: 2013 },
    { model: "Civic", make: "Honda", year: 2012 },
    { model: "Fiesta", make: "Ford", year: 2014 },
    { model: "Accord", make: "Honda", year: 2009 }
];
function filterCars(cars, year = 2010, make1 = 'Toyota', make2 = 'Ford') {
    const model = [];
    cars
        .filter(car => car.year > year && (car.make === make1 || car.make === make2))
        .map(car => {
            model.push(car.model)
        });
    return model;
}

// Фильтрация и суммирование значений: имеется массив транзакций, каждая транзакция описывается объектом с 
// полями amount и type ("income" для доходов и "expense" для расходов). Напишите функцию, которая возвращает сумму доходов, 
// превышающих 1000, или расходов, не превышающих 500.
const transactions = [
    { amount: 1500, type: "income" },
    { amount: 2000, type: "income" },
    { amount: 800, type: "expense" },
    { amount: 300, type: "expense" },
    { amount: 450, type: "expense" }
];
function filterTransactions(transactions, amountIncome = 1000, amountExpense = 500) {
    const sumIncome = transactions
        .filter(transaction => transaction.type === 'income' && transaction.amount > amountIncome)
        .reduce((sum, income) => {
            return sum + income.amount;
        }, 0);
    const sumExpense = transactions
        .filter(transaction => transaction.type === 'expense' && transaction.amount < amountExpense)
        .reduce((sum, expense) => {
            return sum + expense.amount;
        }, 0);
    return `сумма доходов ${sumIncome}, сумма расходов ${sumExpense}`
}

// Фильтрация массива объектов по дополнительным критериям: Дан массив сотрудников, каждый сотрудник описывается объектом 
// с полями name, department, и salary. Напишите функцию, которая возвращает новый массив сотрудников из 
// отделов "маркетинг" или "продажи", чья зарплата находится в диапазоне от 3000 до 5000.
const employees = [
    { name: "Иван", department: "маркетинг", salary: 4000 },
    { name: "Светлана", department: "продажи", salary: 3500 },
    { name: "Алексей", department: "разработка", salary: 5000 },
    { name: "Мария", department: "маркетинг", salary: 3200 },
    { name: "Дмитрий", department: "продажи", salary: 4500 }
];

function filterEmployees(employees, dep1 = 'маркетинг', dep2 = 'продажи', salaryMin = 3000, salaryMax = 5000) {
    return employees
        .filter(empl => (empl.department === dep1 || empl.department === dep2)&&(empl.salary > salaryMin && empl.salary < salaryMax))
};
