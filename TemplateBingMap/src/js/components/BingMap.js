import React from "react";

export default class BingMap extends React.Component {
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
        return(
            <div>
                <div id="bing" style={this.props.style}></div>
            </div>
        );
    }
}
