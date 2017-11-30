import React from "react";
import BingMap from "./BingMap";

export default class Map extends React.Component {
    componentWillMount() {
        this.setState({
            addr: '',
            addr2: '',
            addr3: '',
            addr4: ''
        });
    }
    
    fieldChanged(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {       
        return(
            <div>
                <h1>MAP</h1>
                <div class="row">
                    <div class="col-md-6">
                    <BingMap
                        style={{
                            width: "500px",
                            height: "500px"
                        }}
                        options={{
                            credentials: "AuxTsECqnGBG1i2Buq7XZaFjT2g5YelbzQGpVWcNthh6eO3n_DhPLYac8eBs8sfU"
                        }}
                        ref={inst => { this.bingMap = inst; }}
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Address</label>
                            <input class="form-control" style={{width: "300px"}} id="addr" value={this.state.addr} onChange={(e) => this.fieldChanged(e)} />
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.createPushPin(this.state.addr); }}>Create Push Pin</button>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <input class="form-control" style={{width: "300px"}} id="addr2" value={this.state.addr2} onChange={(e) => this.fieldChanged(e)} />
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.centerMap(this.state.addr2); }}>Center Map</button>
                        </div>
                        <div class="form-group">
                            <label>Address 1</label>
                            <input class="form-control" style={{width: "300px"}} id="addr3" value={this.state.addr3} onChange={(e) => this.fieldChanged(e)} />
                            <label>Address 2</label>
                            <input class="form-control" style={{width: "300px"}} id="addr4" value={this.state.addr4} onChange={(e) => this.fieldChanged(e)} />
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.mapRoute([this.state.addr3, this.state.addr4]); }}>Map Route</button>
                        </div>
                        <div class="form-group">
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.clearRoute(); }}>Clear Route</button>
                        </div>
                        <div class="form-group">
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.clearPushPins(); }}>Clear Push Pins</button>
                        </div>
                        <div class="form-group">
                            <button type="button" style={{ marginTop: "10px" }} class="btn btn-default" onClick={() => { this.bingMap.showMessage("test message"); }}>Show Message</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
