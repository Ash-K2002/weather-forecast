

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
const card = addContent('div','',{'class':'weather-card forecast-card'});

const forecastTitle=addContent('h2',item.date,{'class':'card-title forecast-card-title'});

const icon = document.createElement('img');
icon.setAttribute('src',item.day.condition.icon);
icon.setAttribute('class','card-icon');

const forecastData=addContent('ul','',{'class':'card-data forecast-data'});

const condition = addContent('li','Condition: '+item.day.condition.text,{'class':'card-item'});
const temp=addContent('li','',{'class':'card-item temp-data'});
const tempTitle=addContent('div','Temperature: ');
const tempData=addContent('ul','');
const avgTemp = addContent('li','Avg:'+item.day.avgtemp_c+' C');
const maxTemp = addContent('li','Max:'+item.day.maxtemp_c+' C');
const minTemp = addContent('li','Min:'+item.day.mintemp_c+' C');
const chanceRain=addContent('li','chances of rain: '+item.day.daily_chance_of_rain+'%',{'class':'card-item'});
const chanceSnow=addContent('li','chances of snow: '+item.day.daily_chance_of_snow+'%',{'class':'card-item'});
const precipitation=addContent('li','Precipitation: '+item.day.totalprecip_mm+' mm',{'class':'card-item'});
const snow=addContent('li','Snow Fall: '+item.day.totalsnow_cm+' cm',{'class':'card-item'});
card.appendChild(forecastTitle);
card.appendChild(icon);
card.appendChild(forecastData);
forecastData.appendChild(condition);
forecastData.appendChild(temp);
forecastData.appendChild(chanceRain);
forecastData.appendChild(chanceSnow);
forecastData.appendChild(precipitation);
forecastData.appendChild(snow);
temp.appendChild(tempTitle);
temp.appendChild(tempData);
tempData.appendChild(avgTemp);
tempData.appendChild(maxTemp);
tempData.appendChild(minTemp);
return card;
}

function setCurr(current){
    const card=addContent('div','',{'class':'weather-card curr-card'});
    const title=addContent('h2','Current Weather');

    const carddata=addContent('ul','',{'class':'card-data'});
    const lastUpdated=addContent('li','Last updated: '+current.last_updated,{'class':'card-item'});
    const icon = document.createElement('img');
    icon.setAttribute('src',current.condition.icon);
    const humidity=addContent('div','Humidity: '+current.humidity);
    const precipitation=addContent('div','Precipitation: '+current.precip_mm+' mm',{'class':'card-item'});
    const condition=addContent('div','Condition: '+current.condition.text,{'class':'card-item'});
    const temp=addContent('div','Temperature: '+current.temp_c+' C',{'class':'card-item'});
    card.appendChild(title);
    card.appendChild(icon);
    card.appendChild(carddata);
    carddata.appendChild(lastUpdated);
    carddata.appendChild(condition);
    carddata.appendChild(temp);
    carddata.appendChild(humidity);
    carddata.appendChild(precipitation);

    return card;
}

function setLocation(location){
    const card=addContent('div','',{'class':'location-card'});
    const carddata=addContent('ul','',{'class':'card-data location-data'});
    const country=addContent('li','Country: '+location.country);
    const name=addContent('li','Name: '+location.name);
    const region=addContent('li','Region: '+location.region);
    const localTime=addContent('li','Local Time: '+location.localtime);
    card.appendChild(carddata);
    carddata.appendChild(name);
    carddata.appendChild(region);
    carddata.appendChild(country);
    carddata.appendChild(localTime);
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