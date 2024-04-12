import css from "./style.css";
import {getWeatherObject} from './applogic';
import { showData } from "./domlogic";

const locationName = document.querySelector('#find-location');
const findBtn= document.querySelector('#search-btn');
const message = document.querySelector('#message');
const location = document.querySelector('#location');
const current = document.querySelector('#current');
const forecast = document.querySelector('#forecast');

findBtn.addEventListener('click',()=>{
(async()=>{
    location.textContent=current.textContent=forecast.textContent='';
    message.textContent='We are fetching your favorites...';
    const data = await getWeatherObject(locationName.value);
    if(data!=null){
        message.textContent='';
        console.log(data);
        showData(data,location,current,forecast);
    }
    else{
        message.textContent='Please check your query or try again later';
    }
    

})();
});
