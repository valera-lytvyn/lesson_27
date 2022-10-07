class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get ray() {
    return this.radius;
  }
  set ray(value) {
    return (this.radius = value);
  }
  get diameter() {
    return this.radius * 2;
  }
  areaCircle() {
    let area;
    area = (Math.PI * this.radius ** 2).toFixed(2);
    console.log(area);
  }
  lengthCircle() {
    let length;
    length = (2 * Math.PI * this.radius).toFixed(2);
    console.log(length);
  }
}
let circle = new Circle(20);

class Marker {
  constructor(color) {
    this.color = color;
    this.amountInk = 100;
  }

  print() {
    let markerText;
    let n = 1;
    if (this.amountInk == 0) {
      return console.log("amountInk = 0");
    } else {
      let text = prompt("input text?");
      text = text.trim();
      if (text.length <= this.amountInk) {
        let markerTextArr = text.split("");
        let serchSpace = markerTextArr.filter((item) => item == " ");
        this.amountInk -= markerTextArr.length - serchSpace.length;
        console.log(text);
        return this.amountInk;
        } else {
                for (; this.amountInk > 0; ++n) {
          markerText = text.substring(0, n);
          if (markerText[markerText.length - 1] == " ") continue;
          this.amountInk -= 0.5;
          if (n === text.length) break;
          if (this.amountInk === 0) break;
              }
        console.log(markerText);
        return this.amountInk;
      
      }
    }
  }
}

class Imarker extends Marker {
  refueling() {
    this.amountInk += 20;
    if(this.amountInk > 100){return this.amountInk = 100}
    return this.amountInk;
  }
}

let markerRed = new Marker("red");
let markerGreen = new Imarker("green");



class Employee {
  constructor(name, lastName, position, address, telephone) {
    this.name = name;
    this.lastName = lastName;
    this.position = position;
    this.address = address;
    this.telephone = telephone;
    this.listEmployees = [];
  }
  createArrayEmployees(name, lastName, position, address, telephone) {
    this.listEmployees.push(new Employee(name, lastName, position, address, telephone));
    console.log(this.listEmployees);    
  }
    }
let arrEmployees = new Employee();
arrEmployees.createArrayEmployees("Vasia", "Pupkin", "worker", "Street", '+123');
arrEmployees.createArrayEmployees("Petya", "Pypkin", "boss", "Avenue", '+321');


