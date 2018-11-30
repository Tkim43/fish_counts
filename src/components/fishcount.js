import React, {Component} from 'react';
import {connect} from 'react-redux';

class Fishcount extends Component{
    componentDidMount(){
        console.log("fishCount mounted", this.props)
    }
    render(){
        <div>
            <h1>Boat Information</h1>
        </div>
    }
}

export default Fishcount;

function mapStatetoProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStatetoProps)(Quotes);