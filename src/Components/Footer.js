import { Component } from "react"
import PropTypes from 'prop-types'
import '../App.css'

class Footer extends Component{
    render(){
        return(
        <div className="App-footer">
            <h1>{this.props.etiquetaHTML}</h1>
        </div>
        )
    }
}

export default Footer;

Footer.propTypes={
    children:PropTypes
}

Footer.defaultProps={
    children:"(C) Ramirez Sandoval Roberto Axel - 2023"
}