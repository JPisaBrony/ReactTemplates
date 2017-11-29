import React from "react";
import load from "little-loader";

export default class BingMap extends React.Component {
    createMap() {
        window.map = new Microsoft.Maps.Map("#bing", window.mapOptions);
        window.Microsoft = Microsoft;
    }
    
    searchMap(loc, callback) {
        console.log(loc);
        if(addr == null || addr == '')
            return;
        
        window.Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            var searchManager = new window.Microsoft.Maps.Search.SearchManager(window.map);
            var req = {
                bounds: window.map.getBounds(),
                where: loc,
                callback: callback
            };
            searchManager.geocode(req);
        });
    }
    
    centerMap(addr) {
        this.searchMap(addr,
            function (resp, data) {
                window.map.setView({ bounds: resp.results[0].bestView });
            });
    }
    
    createPushPin(addr) {
        this.searchMap(addr,
            function (resp, data) {
                window.map.setView({ bounds: resp.results[0].bestView });
                window.map.entities.push(new Microsoft.Maps.Pushpin(resp.results[0].location));
            });
    }
    
    mapRoute(addrs) {
        if(addrs == null || typeof addrs == "string" || addrs.length < 1)
            return;
        
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function() {
            var directionsManager = new window.Microsoft.Maps.Directions.DirectionsManager(window.map);
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
            for(var i = 0; i < addrs.length; i++) {
                var waypoint = new window.Microsoft.Maps.Directions.Waypoint({ address: addrs[i] });
                directionsManager.addWaypoint(waypoint);
            }
            directionsManager.calculateDirections();
        });
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
