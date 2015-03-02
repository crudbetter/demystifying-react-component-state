'use strict';
var React = require('react');

var CategoryList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.categories.map(function(category) {
					return (
						<li key={category.id} onClick={this.props.onCategorySelected.bind(null, category.id)}>
							{category.title}
						</li>
					);
				}, this)}
			</ul>
		);
	}
});

module.exports = CategoryList;