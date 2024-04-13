// fetch('http://api.weatherapi.com/v1/current.json?key=cc63f62a75c7487f9c2151339242703&q=delhi,India')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

async function getWeatherObject(location='Delhi,India'){
   try{
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=cc63f62a75c7487f9c2151339242703&days=3&q='+location,{mode:'cors'});
    
    if(!response.ok){
        throw new Error('Network response not ok');
    }
    const data = await response.json();
    return data;
}
catch(error){
    console.error('an error occured',error);
    return null;
}
    
}

export {getWeatherObject};


