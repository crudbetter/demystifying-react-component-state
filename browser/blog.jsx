'use strict';
var React = require('react');

var CategoryList = require('./categoryList.jsx');
var ArticleList = require('./articleList.jsx');

var Blog = React.createClass({
	getInitialState: function() {
		return {
			articles: this.props.initialArticles,
			selectedCategoryId: this.props.initialCategoryId
		};
	},
	render: function() {
		var selectedCategoryArticles = this.state.articles.filter(function(article) {
			return article.categoryId == this.state.selectedCategoryId;
		}, this);

		return (
			<div>
				<CategoryList categories={this.props.categories} onCategorySelected={this._onCategorySelected} />
				<ArticleList articles={selectedCategoryArticles} />
			</div>
		);

	},
	_onCategorySelected: function(categoryId) {
		this.setState({ selectedCategoryId: categoryId });
	},
	_onArticlePublished: function(article) {  
		// we should treat state as immutable  
		// create a new array by concatenating new and old contents  
		// http://stackoverflow.com/a/26254086/305844  
		this.setState({ articles: this.state.articles.concat([article]) });  
	} 
});

module.exports = Blog;	