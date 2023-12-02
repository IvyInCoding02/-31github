// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
      name: 'Alex',
      city: 'Moscow',
    },
    {
      name: 'Ivan',
      city: 'Moscow',
    },
    {
      name: 'Joe',
      city: 'New York'
    },
    {
      name: 'Johan',
      city: 'Berlin'
    },
  ]
  
  const groupByCity = (array) => {
    const result = {}
  
    for (const item of array) {
      const { city, name } = item
  
      if (!result[city]) {
        result[city] = name
      } else if(Array.isArray(result[city])) {
        result[city].push(name)
      } else {
        result[city] = [result[city], name]
      }
    }
  
    return result
  }
  
  console.log(groupByCity(people))
  
  
  
  // Данные на выход
  /*
  {
    'Moscow': [ 'Alex', 'Ivan' ],
    'New York': 'Joe',
    'Berlin': 'Johan'
  }
  */

  

  // 2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

  Number.prototype.plus = function (value) {
    return this + value;
  };

  Number.prototype.minus = function (value) {
    return this - value;
  };

  
// Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа, на которое указывает this и числа, 
// переданного в качестве аргумента. Аналогично для minus.

