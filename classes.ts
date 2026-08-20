class Tester {
  name: string;

constructor(name: string) {
  this.name= name;
}

display() {
  console.log(this.name);
}
}

let tester= new Tester("Mamatha");
tester.display();
