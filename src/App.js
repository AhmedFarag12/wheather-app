import React , { Component } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'

import './css/style.css'

const API_KEY = "5282db1ef557dc859f73b1a7d3127a4e";

export default class App extends Component {
   
  state ={
    city: 'cairo',
    country: 'egypt',
    icon: '',
    temp: 0,
    temp_min : 0,
    temp_max   : 0,
    description: '',
    status : false,

  }



  getData = async (e)=>{
     e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;


     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
     const data= await response.json();

     if(response.status == 200){
      this.setState({
        city : city , 
        country : country,
        temp : this.covertToSilsious(data.main.temp),
        temp_min : this.covertToSilsious(data.main.temp_min),
        temp_max : this.covertToSilsious(data.main.temp_max),
        description : data.weather[0].description,
        status : true,

      })
     }

    
    }

    covertToSilsious =(temp)=>{
      return Math.floor(temp - 273.15)
    }
  render() {
    return (
      <div>
          <Form getData={this.getData} />
         {this.state.status ? <Weather data={this.state} /> : ''}
      </div>
    )
  }
}
