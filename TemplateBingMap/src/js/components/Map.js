import React from "react";
import BingMap from "./BingMap";

export default class Map extends React.Component { 
    render() {       
        return(
            <div>
                <h1>MAP</h1>
                <BingMap
                    style={{
                        width: "500px",
                        height: "500px"
                    }}
                    options={{
                        credentials: "AuxTsECqnGBG1i2Buq7XZaFjT2g5YelbzQGpVWcNthh6eO3n_DhPLYac8eBs8sfU"
                    }} />
            </div>
        );
    }
}
