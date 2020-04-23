const url = "https://api.sunrise-sunset.org/json?lat=41.8542457&lng=-87.6516953&date=tomorrow&formatted=0";
const sunriseTag = document.querySelector("h1");
const wakeupTag = document.getElementById("wakeup")
const coffeeTag = document.getElementById("coffee")

const checkSunrise = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //get time
            let rawTime = data.results.sunrise;
            
            //change timezone and format clocks
            let myTimeZone
            myTimeZone = moment(rawTime).format("h:mmA");

            //change dispaly
            sunriseTag.innerHTML = myTimeZone;

            })

}

const setWakeupAlarm = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //get time
            let rawTime = data.results.sunrise;
            let alarmTime

            //find alarm time
            alarmTime = moment(rawTime).subtract(40, 'minutes');
            alarmTime = moment(alarmTime).format("h:mmA");

            //change dispaly
            wakeupTag.innerHTML = alarmTime
        })
    }

    const setCoffeeMaker = function () {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //get time
                let rawTime = data.results.sunrise;
                let alarmTime
    
                //find alarm time
                alarmTime = moment(rawTime).subtract(30, 'minutes');
                alarmTime = moment(alarmTime).format("h:mmA");
    
                //change dispaly
                coffeeTag.innerHTML = alarmTime
            })
        }


checkSunrise()
setWakeupAlarm()
setCoffeeMaker()