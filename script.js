function time(){
    let clock = document.getElementById("clock");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    let current_time = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = current_time;
    let t = setTimeout(function(){time()},1000);
}
time();

function temperature() {
    let inputValue = document.querySelector("#temperature-input").value;
    let type1 = document.querySelector("#from-option");
    let type2 = document.querySelector("#to-option");
    let result = document.querySelector("#result");
    if (inputValue == "") {
        alert("Please Enter the Temperature to convert")
        location.reload()
    }
    else if (type1.value == "celcius" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "celcius" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) + 273.15
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 273.15
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "kelvin" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
}