# Invented Idiom

## Reglas

-Si la palabra termina en "ar", se le quitan esos dos caractéres
-Si la palabra inicia con Z, se le añade "pe" al final
-Si la palabra traducida tiene 10 o mas letras se debe partir
a la mitad y unir con un guión en medio

## Instalation

```
npm install platzom
```
## How to use 

```
import kripton from 'kripton'

console.log(kripton('programar')) // Program
console.log(kripton('zorro')) // Zorrope
console.log(kripton('zarpar')) // Zarppe
console.log(kripton('abecedario')) // abece-dario
console.log(kripton('sometemos')) // SoMeTeMoS
```
## License

[MIT](https://opensource.org/licenses/MIT)