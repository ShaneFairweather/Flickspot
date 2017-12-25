import React from 'react';

const SocialButton = (props) => {
    return (
        <div className="social-button" style={{backgroundColor: props.color}}>
            <a href={'/auth/' + props.brand} >
                <div className="social-button__icon">
                    <i className={'fa fa-' + props.icon} />
                </div>
                <div className="social-button__text">
                    Login with {props.brand.slice(0, 1).toUpperCase() + props.brand.slice(1, props.brand.length)}
                </div>
            </a>
        </div>
    )
};

export default SocialButton;