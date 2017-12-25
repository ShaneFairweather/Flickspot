import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateList extends Component {
    state = {
        title: '',
        description: '',
        buttonState: 'disabled'
    }

    componentDidMount() {
        // this.props.createList();
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('test');
        this.props.createList(this.state.title, this.state.description);
        this.setState({
            title: '',
            description: ''
        })
    }

    onNubmit(e) {
        e.preventDefault();
        this.props.addMovie();
        console.log('firing the action');
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        }, () => {this.validateForm()});
        // console.log(this.state.title);
        // this.validateForm();
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    validateForm() {
        if(this.state.title === '') {
            this.setState({buttonState: 'disabled'})
        } else {
            this.setState({buttonState: ''})
        }
    }

    renderButton() {
        if(this.state.buttonState === 'disabled') {
            return <button disabled onClick={(e) => this.onNubmit(e)}>Click button</button>
        } else {
            return <button onClick={(e) => this.onNubmit(e)}>Click button</button>
        }
    }

    render() {
        return (
            <div className="create-list">
                <div className="container container--main">
                    <div className="container__header">Create New List</div>
                    <div className="create-list__form-container">
                        <form className="create-list__form">
                            <label className="create-list__form__label" htmlFor="list-title">Title</label>
                            <input
                                className="create-list__form__input"
                                id="list-title"
                                value={this.state.title}
                                onChange={e => this.handleTitleChange(e)}
                            />
                            <label className="create-list__form__label" htmlFor="list-title">Description</label>
                            <textarea
                                className="create-list__form__input"
                                id="list-description"
                                type="textarea"
                                rows="5"
                                value={this.state.description}
                                onChange={e => this.handleDescriptionChange(e)}
                            />
                            <div className="create-list__form__button-container">
                                {this.renderButton()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(CreateList);