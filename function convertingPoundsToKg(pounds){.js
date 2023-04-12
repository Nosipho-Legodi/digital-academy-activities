function convertingPoundsToKg(pounds){
    return pounds /2.205 
}

convertingPoundsToKg(200)
console.log( `200 pounds is the same as  ${convertingPoundsToKg(200)} kgs` )


function convertingInchToCm(inches){
    return inches *2.54
}

convertingInchToCm(200)
console.log(`200 inches is equivalent to ${convertingInchToCm(200)} cms`)

function convertingFahrenheitToCelsius(fahrenheit){
    return (fahrenheit -32) * 5/9
}

convertingFahrenheitToCelsius(200)
console.log(`200 Fahrenheit is equivalent to ${convertingFahrenheitToCelsius(200)} Celsius`)

function convertingFeetToMeters(feet){
    return feet *0.304

}

convertingFeetToMeters(200)
console.log(`200 Feet is equivalent to ${convertingFeetToMeters(200)} Meters`)
