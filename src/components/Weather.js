import React from 'react'
import weatherIcon from '../images/icon.png'


export default function Weather(props) {
    const {city,country,temp,temp_min,temp_max ,description} = props.data;
    return (
        <div className="container">
            
        <div className="row">

            <div className="col-sm-12  text-center">
                <div className="cont-data">
                    <h1>{city}.{country}</h1>
                    <h5> <img src={weatherIcon} /> </h5>
                    <h2 className="display-1">{temp} &deg;</h2>
                    <h3>
                        <span className="display-3 mx-3">{temp_max}&deg;</span>
                        <span className="display-3 mx-3">{temp_min}&deg;</span>

                    </h3>
                    <h5 className="display-2">{description}</h5>

                </div>
            </div>

        

        </div>
      
</div>
    )
}
