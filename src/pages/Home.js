import React, { Component } from 'react'
import {connect} from 'react-redux';
// INI HANYA CONTOH

class Home extends Component {


    render() {
        return (
            <div>
                {this.props.isMember}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        isMember : state.users.isMember,
    }
}


export default connect(mapStateToProps)(Home);