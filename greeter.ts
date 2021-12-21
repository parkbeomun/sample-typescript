 function greeter(person: string) {
    return "Hello, " + person;
 }

 let user = "Jane User";
// let user = [0,1,2,3];  //compile error

document.body.textContent = greeter(user);