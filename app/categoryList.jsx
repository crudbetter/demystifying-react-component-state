'use strict';
var React = require('react');

var CategoryList = React.createClass({
	getInitialState: function() {
		return {
			categories: this.props.categories
		};
	},
	render: function() {
		return (
			<ul>
				{this.props.categories.map(function(category) {
					return (
						<li onClick={self.props.onCategorySelected.bind(null, category.id)}>
							category.title
						</li>
					);
				})}
			</ul>
		);
	}
});

module.exports = CategoryList;