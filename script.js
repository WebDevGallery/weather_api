const input = document.getElementById('inputcity');
const form = document.getElementById('weatherform');
const output = document.getElementById('output');
const body = document.getElementById('body');

let apiRequest = new XMLHttpRequest();
form.addEventListener('submit',($event)=>{
    $event.preventDefault();
    const chosenCity= input.value;
    apiRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e')
    apiRequest.send();
})

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        let response = JSON.parse(apiRequest.response);
        form.style.display = 'none';
        output.style.display = 'flex';
        output.style.alignItems = 'center';
        output.style.alignContent = 'center';
        
        if (response.weather[0].main === 'Clouds') {
            body.style.backgroundImage = 'url("./images/clouds.jpg")';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';
            output.textContent = 'its too cloudy  🥶 in '+ response.name +' Better get an Umbrella with you ';
        }
        if (response.weather[0].main === 'Clear') {
            body.style.backgroundImage = 'url("./images/clear.jpg")';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';
            output.textContent = 'Weather is Clear 😇 in '+ response.name +' Enjoy the day   ';

        }
        if (response.weather[0].main === 'Haze') {
            body.style.backgroundImage = 'url("./images/haze.jpg")';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';
            output.textContent = 'Weather is Foggy/Haze 😶‍🌫️  in '+ response.name +' Beware while driving ';

        }
        if (response.weather[0].main === 'Rain') {
            body.style.backgroundImage = 'url("./images/rain.jpg")';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';
            output.textContent = 'Weather is Rainy 🌧️ in '+ response.name +' You may get wet, Use umbrella ';

        }
    } else if (apiRequest.onabort===1) {
        output.textContent = 'Couldn\'t fetch the weather of the city you entered';
    } else {
        output.textContent = 'Loading';
    }
};
