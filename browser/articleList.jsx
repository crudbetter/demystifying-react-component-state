'use strict';
var React = require('react');

var ArticleList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Articles</h3>
				<ul>
					{this.props.articles.map(function(article) {
						return (
							<li key={article.id}>{article.title + ' by ' + article.author}</li>
						);
					})}
				</ul>
			</div>
		);
	}
});

module.exports = ArticleList;