

function showData(data,target1,target2,target3){
const current = data.current;
const forecast = data.forecast;
const location = data.location;
const title1= addContent('h1','Forecast',{'class':'forecast-title'});
const forecastDeck=addContent('div','',{'class':'forecast-cards'});
target1.textContent=target2.textContent=target3.textContent='';

target1.appendChild(setLocation(location));

const currentCard = setCurr(current);
target2.appendChild(currentCard);

forecast.forecastday.forEach((item)=>{
forecastDeck.appendChild(setForecast(item));
});
target3.appendChild(title1);
target3.appendChild(forecastDeck);
}

function setForecast(item){
const card = addContent('div','',{'class':'weather-card card'});
const title=addContent('h1',item.date);
const icon = document.createElement('img');
icon.setAttribute('src',item.day.condition.icon);
const condition = addContent('div','Condition: '+item.day.condition.text);
const temp=addContent('div','');
const tempTitle=addContent('h3','Temperature');
const avgTemp = addContent('div','Avg Temp:'+item.day.avgtemp_c+' C');
const maxTemp = addContent('div','Max Temp:'+item.day.maxtemp_c+' C');
const minTemp = addContent('div','Min Temp:'+item.day.mintemp_c+' C');
const chanceRain=addContent('div','chances of rain: '+item.day.daily_chance_of_rain+'%');
const chanceSnow=addContent('div','chances of snow: '+item.day.daily_chance_of_snow+'%');
const precipitation=addContent('div','Precipitation: '+item.day.totalprecip_mm+' mm');
const snow=addContent('div','Snow Fall: '+item.day.totalsnow_cm+' cm');
card.appendChild(title);
card.appendChild(icon);
card.appendChild(condition);
temp.appendChild(tempTitle);
temp.appendChild(avgTemp);
temp.appendChild(maxTemp);
temp.appendChild(minTemp);
card.appendChild(temp);
card.appendChild(chanceRain);
card.appendChild(chanceSnow);
card.appendChild(precipitation);
card.appendChild(snow);
return card;
}

function setCurr(current){
    const card=addContent('div','',{'class':'weather-card card'});
    const title=addContent('h1','Current Weather');
    const lastUpdated=addContent('div','Last updated: '+current.last_updated);
    const icon = document.createElement('img');
    icon.setAttribute('src',current.condition.icon);
    const humidity=addContent('div','Humidity: '+current.humidity);
    const precipitation=addContent('div','Precipitation: '+current.precip_mm+' mm');
    const condition=addContent('div','Condition: '+current.condition.text);
    const temp=addContent('div','Temperature: '+current.temp_c+' C');
    card.appendChild(title);
    card.appendChild(lastUpdated);
    card.appendChild(icon);
    card.appendChild(condition);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(precipitation);

    return card;
}

function setLocation(location){
    const card=addContent('div','',{'class':'location-card'});
    const country=addContent('div','Country: '+location.country);
    const name=addContent('div','Name: '+location.name);
    const region=addContent('div','Region: '+location.region);
    const localTime=addContent('div','Local Time: '+location.localtime);
    card.appendChild(name);
    card.appendChild(region);
    card.appendChild(country);
    card.appendChild(localTime);
    return card;
}


function addContent(type,content,attributes={}){
const element = document.createElement(type);
element.textContent=content;
for(const property in attributes){
    element.setAttribute(property,attributes[property]);
}
return element;
}

export {showData};