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
