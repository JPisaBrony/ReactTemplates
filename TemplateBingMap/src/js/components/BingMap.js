import React from "react";
import load from "little-loader";

export default class BingMap extends React.Component {
    createMap() {
        window.map = new Microsoft.Maps.Map("#bing", window.mapOptions);
        window.Microsoft = Microsoft;
        
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            window.searchManager = new Microsoft.Maps.Search.SearchManager(window.map);
        });
        
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function() {
            window.directionsManager = new Microsoft.Maps.Directions.DirectionsManager(window.map);
        });
    }
    
    searchMap(loc, callback) {
        console.log(loc);
        if(addr == null || addr == '')
            return;
        
        if(searchManager != null) {
            var req = {
                bounds: map.getBounds(),
                where: loc,
                callback: callback
            };
            searchManager.geocode(req);
        }
    }
    
    centerMap(addr) {
        this.searchMap(addr,
            function (resp, data) {
                map.setView({ bounds: resp.results[0].bestView });
            });
    }
    
    createPushPin(addr) {
        this.searchMap(addr,
            function (resp, data) {
                map.setView({ bounds: resp.results[0].bestView });
                map.entities.push(new Microsoft.Maps.Pushpin(resp.results[0].location));
            });
    }
    
    mapRoute(addrs) {
        if(addrs == null || !(addrs instanceof Array) || addrs.length < 1)
            return;
        
        if(directionsManager != null) {
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
            for(var i = 0; i < addrs.length; i++) {
                var waypoint = new Microsoft.Maps.Directions.Waypoint({ address: addrs[i] });
                directionsManager.addWaypoint(waypoint);
            }
            directionsManager.calculateDirections();
        }
    }
    
    clearRoute() {
        if(directionsManager != null)
            directionsManager.clearAll();
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
