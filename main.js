// class Bloger {
//   constructor (ytNick, fitstName, lastName) {
//     this.ytNick = ytNick;
//     this.fitstName = fitstName;
//     this.lastName = lastName;
//   }

//   sayName() {
//     console.log(`${this.ytNick} ${this.fitstName} ${this.lastName}`);
//   }
// }

// let channel1 = new Bloger('Velaskes', 'Валерий', 'Жмышенко');
// console.log('Название канала: ', channel1.sayName())

// let title = document.querySelector('.hero__title');
// title.textContent = 'Новый заголовок';

// console.log(title);
// console.log(typeof title);

const array = [3, 15, 255, 288, 983, 888, 332, 255, 888];

const fn = num => {
  let arrayFilter = [];

  for (let i = 0; i > num.length; i++) {
    let Digit = num[i];

    if (Digit == 255) {
      arrayFilter.push("dsasdas");
    } 
    
    if (Digit == 888) {
      arrayFilter.push(2);
    }
  };

  return arrayFilter;
};

console.log(fn(array));