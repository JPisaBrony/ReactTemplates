import React from "react";
import load from "little-loader";

export default class BingMap extends React.Component {
    createMap() {
        window.map = new Microsoft.Maps.Map("#bing", window.mapOptions);
        window.Microsoft = Microsoft;
    }
    
    createPushPin(addr) {
        if(addr == null || addr == '')
            return;
        
        window.Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            var searchManager = new window.Microsoft.Maps.Search.SearchManager(window.map);
            var requestOptions = {
                bounds: map.getBounds(),
                where: addr,
                callback: function (answer, userData) {
                    map.setView({ bounds: answer.results[0].bestView });
                    map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
                }
            };
            searchManager.geocode(requestOptions);
        });
    }
    
    mapRoute() {
        
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
