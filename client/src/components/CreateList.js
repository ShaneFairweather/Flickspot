import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateList extends Component {
    render() {
        return (
            <div className="create-list">
                <div className="container container--main">
                    <form>
                        <input />
                        <input type="textarea"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateList;