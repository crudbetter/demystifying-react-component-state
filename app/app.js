'use strict';
var React = require('react');
var Blog = require('./blog.jsx');

// TODO pass in categories here and use as props throughout application
// reason being is that it is data that is not being modified by the application
// and is therefore not state
React.renderComponent(Blog(), document.getElementById('blogContainer'));