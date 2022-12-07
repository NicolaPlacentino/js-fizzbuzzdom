/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/

//  1. prendo gli elementi dal DOM

const targetElement = document.getElementById('target')

// 2. creo un ciclo che stampi in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    
    let fizzBuzz 
    
    // 3. se il numero è multiplo di 3 il valore è 'Fizz', se di 5 il valore è 'Buzz', se di entrambi il valore è 'FizzBuzz'
    if(i % 3 === 0 && i % 5 === 0){
        fizzBuzz = 'FizzBuzz'
    } else if(i % 5 === 0){
         fizzBuzz = 'Buzz'
    } else if (i % 3 === 0){
        fizzBuzz = 'Fizz'
    }

    if(i % 3 === 0 || i % 5 === 0){
        // 4. stampare in console
        console.log(fizzBuzz)

        // 5. stampare in pagina
        const fizzBuzzElement = `<div class="col p-4"><div class="${fizzBuzz}">${fizzBuzz}</div></div>`
        targetElement.innerHTML += (fizzBuzzElement)

    } else {
         // 4. stampare in console
        console.log(i)

          // 5. stampare in pagina
        const iElement = `<div class="col p-4"><div class="i-element">${i}</div></div>`
        targetElement.innerHTML += iElement
    }
}