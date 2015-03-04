'use strict';
var React = require('react');

var CategoryList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Categories</h3>
				<ul>
					{this.props.categories.map(function(category) {
						return (
							<li key={category.id} onClick={this.props.onCategorySelected.bind(null, category.id)}>
								<span className="clickable">{category.title}</span>
							</li>
						);
					}, this)}
				</ul>
			</div>
		);
	}
});

module.exports = CategoryList;