'use strict';
var React = require('react');
var socket = require('socket.io-client')('http://localhost:8000/');

var Blog = require('./blog.jsx');

var renderedBlog = React.render(Blog({
	initialCategoryId: 1,
	categories: [
		{ id: 1, title: 'AngularJS' },
		{ id: 2, title: 'React' }
	],
	initialArticles: [
		{ id: 1, categoryId: 1, title: 'Managing Client Only State in AngularJS', author: 'M Godfrey' },
		{ id: 2, categoryId: 1, title: 'The Best Way to Share Data Between AngularJS Controllers', author: 'M Godfrey' },
		{ id: 3, categoryId: 2, title: 'Demystifying React Component State', author: 'M Godfrey' }
	]
}), document.getElementById('blogContainer'));

socket.on('articlePublished', function(article) {
	renderedBlog._onArticlePublished(article);
});