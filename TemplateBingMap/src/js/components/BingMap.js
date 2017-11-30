import React from "react";
import load from "little-loader";
import $ from "jquery";

export default class BingMap extends React.Component {
    createMap() {
        if(window.mapOptions.navigationBarMode === "compact") {
            var navigationBarMode = Microsoft.Maps.NavigationBarMode;
            window.mapOptions.navigationBarMode = navigationBarMode.compact;
        }
            
        window.map = new Microsoft.Maps.Map("#bing", window.mapOptions);
        window.Microsoft = Microsoft;
        
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            window.searchManager = new Microsoft.Maps.Search.SearchManager(window.map);
        });
        
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function() {
            window.directionsManager = new Microsoft.Maps.Directions.DirectionsManager(window.map);
        });
        
        Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
            var options = {
                maxResults: 4,
                map: map
            };
            
            window.manager = new Microsoft.Maps.AutosuggestManager(options);
        });
    }
    
    searchMap(loc, callback) {
        if(loc == null || loc == '') {
            this.showMessage("Address not supplied");
            return;
        }
        
        if(searchManager != null) {
            var req = {
                bounds: map.getBounds(),
                where: loc,
                callback: callback,
                errorCallback: () => { this.showMessage("Address not found"); }
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
        if(addrs == null || !(addrs instanceof Array) || addrs.length < 1) {
            this.showMessage("Addresses not supplied");
            return;
        }
        
        for(var i = 0; i < addrs.length; i++) {
            if(addrs[i] == null || addrs[i] == "") {
                this.showMessage("Addresses not supplied");
                return;
            }
        }
        
        if(directionsManager != null) {
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
            console.log(addrs.length);
            console.log(addrs);
            for(var i = 0; i < addrs.length; i++) {
                var waypoint = new Microsoft.Maps.Directions.Waypoint({ address: addrs[i] });
                directionsManager.addWaypoint(waypoint);
            }
            directionsManager.calculateDirections();
            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', (e) => {
                this.showMessage(e.message);
            });
        }
    }
    
    clearRoute() {
        if(directionsManager != null)
            directionsManager.clearAll();
    }
    
    clearPushPins() {
        if(map != null)
            map.entities.clear();
    }
    
    showMessage(msg) {
        if(this.state.messsageTriggered == false) {
            this.state.messsageTriggered = true;
            $("#bing").append("<div id='notificiation' style='opacity: 0; position: absolute; left: 50%; top: 50%; display:table; height: 50px; width: 100%; transform: translate(-50%, -50%); text-align: center; background-color: #f2f2f2;'><span style='display: table-cell; vertical-align: middle;'>" + msg + "</span></div>");
            $("#notificiation").animate({ opacity: 1 }, 500);
            $("#notificiation").delay(1500).animate({ opacity: 0 }, 500);
            setTimeout(() => {
                $("#notificiation").remove();
                this.state.messsageTriggered = false;
            }, 2500);
        }
    }
    
    attachSearch(id, container) {
        if(window.manager != null) {
            manager.attachAutosuggest(id, container);
        } else {
            setTimeout(() => {
                this.attachSearch(id, container);
            }, 1000);
        }
    }
    
    componentDidMount() {
        this.setState({
            messsageTriggered: false
        });
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
