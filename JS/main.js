const username = prompt("Escribe tu nombre: ")

function Hi() {
    alert("Hola " + username + " bienvenido a Capybank")
};

Hi();

let age = 0;

do{
    age = parseInt(prompt("Escribe tu edad: "))
}while(age <= 17);

function createUser(username, age) {
    this.username = username;
    this.age = age
} 
const user1 = new createUser(username, age);

let users = [
    user1
]



let currency = prompt("Desear relizar un plazo fijo en pesos o dolares?")

if(currency == "dolares"){
    alert("El porcentaje de interes anual en dolares es del 6%")
    let mount = parseInt(prompt("Escribe la cantidad de dinero que vas dejar en el plazo fijo: "))
    let days = parseInt(prompt("Escribe la cantidad de dias para calcular el interes: "))
    let restult = (mount * 0.06 / 365 * days).toFixed(2);
    alert("El interes generado por dejar $" + mount + " en el plazo fijo durante " + days + " es $" + restult);

}else if(currency == "pesos"){
    alert("El porcentaje de interes anual en pesos es del 75%")
    let mount = parseInt(prompt("Escribe la cantidad de dinero que vas dejar en el plazo fijo: "))
    let days = parseInt(prompt("Escribe la cantidad de dias para calcular el interes: "))
    let restult = (mount * 0.75 / 365 * days).toFixed(2);
    alert("El interes generado por dejar $" + mount + " en el plazo fijo durante " + days + " es $" + restult);
}

const findUser = users.find( user1 => {
    return username === user1.username
}) 

console.log(findUser)