'use strict';
var React = require('react');

var CategoryList = require('./categoryList.jsx');
var ArticleList = require('./articleList.jsx');

var Blog = React.createClass({
	getInitialState: function() {
		return {
			selectedCategoryId: this.props.initialCategoryId,
			articles: this.props.initialArticles
		}
	},
	render: function() {
		var self = this;

		var selectedCategoryArticles = self.state.articles.filter(function(article) {
			return article.categoryId == self.state.selectedCategoryId;
		});

		return (
			<div>
				<CategoryList categories={self.props.categories} onCategorySelected={self._onCategorySelected} />
				<ArticleList articles={selectedCategoryArticles} />
			</div>
		);

	},
	_onCategorySelected: function(categoryId) {
		this.setState({ selectedCategoryId: categoryId });
	},
	_onArticlePublished: function(article) {
		this.setState({ articles: this.state.articles.concat([article]) });
	}
});

module.exports = Blog;	