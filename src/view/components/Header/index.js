import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * @name Header
 * @description this is a stateless main application Header component
 */
const Header = ({ title }) => {
    return (
        <header className="Header-container">
            <span className="Header-title">{title}</span>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;