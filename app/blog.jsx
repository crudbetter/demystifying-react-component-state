'use strict';
var React = require('react');

var CategoryList = require('./categoryList.jsx');
var ArticleList = require('./articleList.jsx');


function getBlogState(selectedCategoryId) {
	
	var categories = [
		{ id: 1, title: 'AngularJS' },
		{ id: 2, title: 'React' }
	];

	var articles = [
		{ id: 1, categoryId: 1, title: 'Managing Client Only State in AngularJS', author: 'M Godfrey' },
		{ id: 2, categoryId: 1, title: 'The Best Way to Share Data Between AngularJS Controllers', author: 'M Godfrey' },
		{ id: 3, categoryId: 2, title: 'Demystifying React Component State', author: 'M Godfrey' }
	];

	return {
		allCategories: categories,
		selectedCategoryId: selectedCategoryId,
		selectedCategoryArticles: articles.filter(function(article) {
			return article.categoryId == selectedCategoryId
		})
	}
};

var Blog = React.createClass({
	getInitialState: function() {
		return getBlogState(this.props.defaultCategoryId);
	},
	render: function() {
		return (
			<div>
				<CategoryList categories={this.state.allCategories} onCategorySelected={this._onCategorySelected} />
				<ArticleList articles={this.state.selectedCategoryArticles} />
			</div>
		);

	},
	_onCategorySelected: function(categoryId) {
		this.setState(getBlogState(categoryId));
	}
});

module.exports = Blog;	