import { Component } from "react"
import '../App.css'

class Banner extends Component{
    render(){
        return(
        <div className="App-banner">
            <h1>{this.props.texto}</h1>
        </div>
        )
    }
}

export default Banner