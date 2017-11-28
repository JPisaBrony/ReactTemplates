import React from "react";
import ReactDOM from "react-dom";

export default class BingMap extends React.Component {
    createMap() {
        new Microsoft.Maps.Map("#bing", {
            credentials: "AuxTsECqnGBG1i2Buq7XZaFjT2g5YelbzQGpVWcNthh6eO3n_DhPLYac8eBs8sfU"
        });
    }
    
    markup() {
        return {
           __html: window.mapNode.innerHTML
        }
    }
    
    componentDidMount() {
        if(window.mapNode == null) {
            var node = ReactDOM.findDOMNode(this);
            ReactDOM.render(<div><div id="bing" style={this.props.style}></div></div>, node);
            var script = document.createElement("script");
            script.src = "https://www.bing.com/api/maps/mapcontrol?callback=createMap";
            document.body.appendChild(script);
            window.createMap = this.createMap;
        } else {
            var node = ReactDOM.findDOMNode(this);
            ReactDOM.render(<div dangerouslySetInnerHTML={this.markup()} />, node);
        }
    }
    
    componentWillUnmount() {
        window.mapNode = ReactDOM.findDOMNode(this);
    }
    
    render() {
        return <div/>;
    }
}
