/**
 *
 * Exercise Variable
 *
 */

const name = "Mochamad Akbar";
const age = 23;
const university = "Widyatama Bandung";
const citizen = "Bandung";

console.log(`Nama saya ${name}, saya berusia ${age} tahun, saya dari univerisitas ${university} dan berasal dari ${citizen}`);



/**
 *
 * Exercise Function
 *
 */
function animal(name, type) {
  return `${name} merupakan binatang dengan jenis ${type}.`;
}

console.log(animal('Lumba - Lumba', 'Mamalia'));


/**
 *
 * Exercise Loop
 *
 */
const friends = ["Rocky", "Dean", "John", "David", "Roy"];

friends.forEach(name => {
  console.log(name);
});


/**
 *
 *
 * Exercise Class
 *
 */
class Student {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }

  set name(value) {
    if (value !== "") {
      this._name = value;
    } else {
      console.error("Name cannot be empty string.");
    }
  }

  get name() {
    return this._name;
  }

  set department(value) {
    if (value !== "") {
      this._department = value
    } else {
      console.error("Department cannot be empty string");
    }
  }

  get department() {
    return this._department;
  }


  introduction() {
    return `Halo nama saya ${this.name} dan saya dari jurusan ${this.department}`;
  }
}
const profile = new Student("Mochamad Akbar", "Sistem Informasi")
console.log(profile.introduction());


/**
 *
 * Exercise Bonus
 *
 */
class Library {
  constructor(books) {
    this._books = books;
  }

  addBook(books) {
    this._books.push(books);
  }

  showbooks() {
    this._books.forEach(name => {
      console.log(`Buku dengan judul ${name}`);
    });
  }
}
const lib = new Library(["Homo Sapiens", "Atomic"])
console.log(lib.showbooks());
lib.addBook(["Megalodon"]);
console.log(lib.showbooks());
