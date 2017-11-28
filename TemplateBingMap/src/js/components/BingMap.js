import React from "react";
import load from "little-loader";

export default class BingMap extends React.Component {
    createMap() {
        new Microsoft.Maps.Map("#bing", window.mapOptions);
    }
    
    componentDidMount() {
        window.createMap = this.createMap;
        window.mapOptions = this.props.options;
        load("https://www.bing.com/api/maps/mapcontrol?callback=createMap");
    }
    
    render() {
        return(
            <div>
                <div id="bing" style={this.props.style}></div>
            </div>
        );
    }
}
