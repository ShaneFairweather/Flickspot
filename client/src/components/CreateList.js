import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateList extends Component {
    componentDidMount() {
        // this.props.createList();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createList('Noob');
        console.log('firing the action');
    }

    render() {
        return (
            <div className="create-list">
                <div className="container container--main">
                    <form>
                        <input />
                        <input type="textarea"/>
                        <button onClick={(e) => this.onSubmit(e)}>Click button</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(CreateList);