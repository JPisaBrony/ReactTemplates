import React from "react";

export default class Map extends React.Component {
    createMap() {
        new Microsoft.Maps.Map("#bing", {
            credentials: "AuxTsECqnGBG1i2Buq7XZaFjT2g5YelbzQGpVWcNthh6eO3n_DhPLYac8eBs8sfU"
        });
    }
    
    componentDidMount() {
        var script = document.createElement("script");
        script.src = "https://www.bing.com/api/maps/mapcontrol?callback=createMap";
        document.body.appendChild(script);
        window.createMap = this.createMap;
    }
    
    render() {
        var s = {
            width: "500px",
            height: "500px"
        }
        
        return(
            <div>
                <div id="bing" style={s}></div>
            </div>
        );
    }
}
