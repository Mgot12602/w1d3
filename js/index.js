const object = {
  "name of the property": {},
  booleans: true,
  strings: "as you can see",
  numbers: 123,
  arrays: [],
  undefined: undefined,
  null: null,
  1: "this is a number name",
  _: "for thigs that are kinda sketchy",
};
console.log(object);
console.log(object.booleans);
console.log(object.undefined);
object.numbers = "A spooky string";
console.log(object.numbers);
console.log(object);
console.log(object["name of the property"]);
console.clear();
const allArrays = "arrays";
console.log(object.allArrays);
console.log(object[allArrays]);
console.log(object["arrays"]);
const object2 = Object.freeze(object);
object2.arrays = "Another spooky string";
console.log(object2);
console.clear();

let something = "name";

const newObject = {
  something: "surName",
};

const anotherObject = {
  something: 123,
};

something = function () {
  return true;
};

console.log(newObject);
console.log("anotherObject:", anotherObject);
console.clear();

const aWholeNewObject = {
  data: {
    data1: {
      data2: {
        data3: {
          thatsEnough: false,
          data4: {
            thatsEnough: true,
            oneArray: ["this is a string", "this is another string"],
          },
        },
      },
    },
  },
};
console.log(aWholeNewObject.data.data1.data2.data3.data4.oneArray[0]);
// aWholeNewObject.data.data1.data2.data3.data4.oneArray.forEach(function (
//   element
// ) {
//   console.log(element);
// });
console.log(aWholeNewObject.data.data1.data2.data3.data4.oneArray);

console.clear();

const user = {
  username: "pauline",
  from: "france",
  musicTaste: ["jazz", "rock", "techno"],
  hasBrother: true,
  password: "supersecretpassw0Rd.",
};
console.log(user);

delete user.password;
console.log(user);
console.clear();
const user2 = {
  username: "Alex",
  from: "spain",
  musicTaste: ["indie"],
  hasSiblings: false,
  password: "super secretpassword2. With a space",
  favoriteBands: [
    {
      name: "U2",
      from: "Ireland",
    },
    {
      name: "Coldplay",
      from: "England",
    },
  ],
};
console.log(user2);
// user2.favoriteBands.forEach(function (element) {
//   console.log(element.name);
// });

console.log(user2.favoriteBands[0].name, user2.favoriteBands[1].name);

console.clear();

const array1 = [];
console.log(array1 === []);
const array2 = array1;
console.log(array1 === array2);
const array3 = [];

array2.push("hey there");
console.log(array1);
console.clear();

const obj1 = { name: { first: "user", last: "name" } };
const obj2 = { name: { first: "user", last: "name" } };
console.log(obj1 === obj2);
console.log(obj1.name === obj2.name);
console.log(obj1.name.first === obj2.name.first);
console.clear();

const obj3 = {};
const obj4 = obj3;
obj4.isCool = false;
console.log(obj3.isCool);
console.clear();

const array7 = [1, 2, 3];
const array8 = array7;
console.log(array7);
for (let i = 0; i < array8.length; i++) {
  array8[i] = array8[i] ** 2;
}

// const copyOfArray7 = JSON.parse(JSON.stringify(array7));
// const stringified = JSON.stringify({ hello: "hello" });
// console.log("stringified:", stringified);
// console.log("parse it", JSON.parse(stringified));

const shallow = [{ number: 1 }, { number: 2 }];
const copy = shallow.slice();
copy[0].number = 2;
console.log("shallow:", shallow);
console.log("copy:", copy);

console.clear();

console.log(shallow);

for (let i = 0; i < shallow.length; i++) {
  console.log(shallow[i]);
}

const arr767 = [1, 2, 3];
// for ... of
for (let key of [1, 2, 3]) {
  console.log(key);
}
for (let key of "gosia") {
  console.log(key);
}

const user23 = {
  username: "Alex",
  from: "spain",
  musicTaste: ["indie"],
  hasSiblings: false,
  password: "super secretpassword2. With a space",
  favoriteBands: [
    {
      name: "U2",
      from: "Ireland",
    },
    {
      name: "Coldplay",
      from: "England",
    },
  ],
};
// Object.keys

// for ... in
for (let keys in user23) {
  console.log(keys);
}

console.clear();

console.log(Object.keys(user23));

console.clear();

const alex = {
  username: "Alex",
  from: "spain",
  musicTaste: ["indie"],
  hasSiblings: false,
  password: "super secretpassword2. With a space",
  favoriteBands: [
    {
      name: "U2",
      from: "Ireland",
    },
    {
      name: "Coldplay",
      from: "England",
    },
  ],
};

let count = 1;
for (let dimitri in alex) {
  console.log(`${count} run`);
  console.log(` the value variable is: ${dimitri}`);
  console.log(alex[dimitri]);
  count++;
}
console.clear();
const variable = "username";
(alex["username"] === alex.username) === alex[variable];

console.log(Object.keys(alex));
console.log(Object.values(alex));
