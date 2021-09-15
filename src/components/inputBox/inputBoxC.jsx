import React, { Component } from 'react';
import "./inputBox.css"
import Slider from './slider'
import Dropdown from './dropdown';
import { Context } from '../../Store'

class InputBoxC extends Component {
    static contextType = Context

    componentDidMount() {
        window.$('[data-toggle="popover"]').popover();
    }

    render(){
        return(
            <div>
                <div class="card text-black bg-warning mb-3">
                <div class="card border-primary mb-1"></div>
                <div class="card-body">
                    <h5 class="card-title input-title">{this.props.name}</h5>
                    <button type="button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Component Layer Thickness (um)</button>
                    <Slider name="cathodeThickness" min="0" max="100"/>
                    <p>{this.context[0]["components"]["cathode"]["thickness"]}</p>
                    <button type="button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Porosity of Component (x100)</button>
                    <Slider name="cathodePorosity" min="0" max="100"/>
                    <p>{this.context[0]["components"]["cathode"]["porosity"]}</p>
                    <button type="button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Component Material</button>
                    <Dropdown name="cathodeMaterial" itemlist={["NMC","LFP","Cobalt"]} active={this.context[0]["components"]["cathode"]["material"]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputBoxC