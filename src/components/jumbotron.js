import React from "react";

function Jumbotron() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid" style={{textAlign: "center", color: "blue"}}>
                <div className="container">
                    <h1 className="display-4" style={{fontSize: "60px"}}>Weather App</h1>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;