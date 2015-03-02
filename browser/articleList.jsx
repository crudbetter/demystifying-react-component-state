'use strict';
var React = require('react');

var ArticleList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.articles.map(function(article) {
					return (
						<li key={article.id}>{article.title + ' by ' + article.author}</li>
					);
				})}
			</ul>
		);
	}
});

module.exports = ArticleList;