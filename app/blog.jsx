'use strict';
var react = require('react');

var CategoryList = require('./categoryList.jsx');
var ArticleList = require('./articleList.jsx');

// TODO: add component validation, e.g. defaultCategoryId required

function getBlogState(selectedCategoryId) {
	// Faked data rather than implementing Flux stores etc.
	// But if using Flux, might be:
	/*
		var allCategories = CategoryStore.getAll();
		return {
			allCategories: allCategories,
			selectedCategoryId: selectedCategoryId,
			selectedCategoryArticles: ArticleStore.getAllForCategoryId(selectedCategoryId)
		};
	*/
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