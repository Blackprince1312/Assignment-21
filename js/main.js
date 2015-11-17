var = require('react');
var ReactDom = require('react-dom');

var Demo = react.createClass({
	render: function() {
		return (

<form>
	<label for="fname">first name</label>
	<input type="text" id="fname"/>
</form>

<form>
	<label for="fname">Last Name</label>
	<input type="text" id="lname"/>
</form>

<form>
	<label for="fname">Date of birth</label>
	<input type="text" id="dBirth"/>
</form>

			
		<h1>hello {this.props.fname}</h1>
		)
	}
});

ReactDom.render(<Demo fname="Elijah"></demo>, document.getElementById('container'));
