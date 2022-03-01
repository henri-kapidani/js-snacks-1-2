/*
Snack 1.1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
/*
const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

if (num1 > num2) {
	alert(num1);
} else if (num1 < num2) {
	alert(num2);
} else {
	alert('sono uguali');
}
*/


/*
Snack 1.2

*/


/*
Snack 1.3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(senza array)
*/
/*
let sum = 0;
for (i = 0; i < 10; i++) {
	let number = parseInt(prompt('Dammi un numero'));
	sum += number;
}

console.log(sum);
*/



/*
Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/
/*
const arrNomi = [
	'Anacondo',
	'Bolivio',
	'Caterino',
	'Dino',
	'Emilio'
];

const searchName = prompt('Come ti chiami?');

let found = false;
for (let i = 0; i < arrNomi.length; i++) {
	if (arrNomi[i].toLowerCase() == searchName.toLowerCase()) {
		found = true;
	}
}

if (found) {
	console.log('Puoi partecipare');
} else {
	console.log('NON puoi partecipare');
}
*/


/*
Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
/*
let numOdd = [];

for (let i = 0; i < 6; i++) {
	let number = parseInt(prompt('dammi un numero'));
	if (number % 2 == 1) {
		numOdd.push(number);
	}
}

console.log(numOdd);
*/

/*
Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
/*
const strNumber = prompt('dammi un numero di 4 cifre');
let sum = 0;
for (let i = 0; i < strNumber.length; i++) {
	sum += parseInt(strNumber[i]);
}
console.log(sum);
*/
/*
let number = parseInt(prompt('dammi un numero di 4 cifre'));
if (number < 1000 || number > 9999) {
	console.log('Numero cifre sbagliato')
} else {
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += number % 10;
		number = Math.floor(number / 10);
	}
	console.log(sum);
}
*/


/*
Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

/* ciclo for */
// let sum = 0;
// for (let i = 0; i < 5; i++) {
// 	let number = parseInt(prompt('Dacci un numero'));
// 	sum += number;
// }
// console.log(sum);

/* ciclo while */
// let sum = 0;
// let i = 0;
// while (i < 5) {
// 	let number = parseInt(prompt('Dacci un numero'));
// 	sum += number;
// 	i++;
// }
// console.log(sum);




/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// let number = parseInt(prompt('Dacci un numero'));
// while (isNaN(number)) {
// 	number = parseInt(prompt('Non hai inserito un numero. Dacci un numero'));
// }

// if (number % 2 == 0) {
// 	console.log(number);
// } else {
// 	console.log(number + 1);
// }


// if (isNaN(number)) {
// 	alert('Non hai messo un numero')
// } else {
// 	if (number % 2 == 0) {
// 		console.log(number);
// 	} else {
// 		console.log(number + 1);
// 	}
// }



/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const arrNomi = ['Henri', 'Francesco', 'Giovanni', 'Marco', 'Carla'];
const arrCognomi = ['Kapidani', 'Totti', 'Rossi', 'Bianchi', 'Verdi', 'Gialli', 'Violetti'];

const arrNomiIndexes = [];
const arrCognomiIndexes = [];

for (let i = 0; i < 3; i++) {
	let indexRandomNome = Math.floor(Math.random() * arrNomi.length);
	while (arrNomiIndexes.includes(indexRandomNome)) {
		indexRandomNome = Math.floor(Math.random() * arrNomi.length);
	}
	arrNomiIndexes.push(indexRandomNome);
	const nome = arrNomi[indexRandomNome];

	let indexRandomCognome = Math.floor(Math.random() * arrCognomi.length);
	while (arrCognomiIndexes.includes(indexRandomCognome)) {
		indexRandomCognome = Math.floor(Math.random() * arrCognomi.length);
	}
	arrCognomiIndexes.push(indexRandomCognome);
	const cognome = arrCognomi[indexRandomCognome];

	const nomeFinale = nome + ' ' + cognome;
	console.log(nomeFinale);
}

console.log(arrNomiIndexes);
console.log(arrCognomiIndexes);
