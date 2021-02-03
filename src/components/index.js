import React from "react";

function Weather(props) {
    return (
        <>
            <div className="container" style={{textAlign: "center"}}>
                <div className="cards pt-4">
                    <h1>{props.city}</h1>
                    <h5 className="py-4">
                        <i className={`fas ${props.weatherIcon} fa-4x`}></i>
                    </h5>


                    {props.temp_fahrenheit ? (<h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>) : null}

                    {/* show max and min tempurature */}
                    {minmaxTemp(props.temp_min, props.temp_max)}

                    <h4 className="py-3">{props.description}</h4>
                </div>
            </div>
        </>
    );
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">L:{min}&deg;</span>
                <span className="px-4">H:{max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;