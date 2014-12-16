'use strict';
var React = require('react');

var ArticleList = React.createClass({
	getInitialState: function() {
		return {
			articles: this.props.articles
		};
	},
	render: function() {
		return (
			<ul>
				{this.props.articles.map(function(article) {
					return (
						<li>article.title + ' by ' + article.author</li>
					);
				})}
			</ul>
		);
	}
});

module.exports = ArticleList;