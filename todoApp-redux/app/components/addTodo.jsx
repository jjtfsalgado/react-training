var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
      dispatch(actions.addTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  },
  render:function () {
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
            <input type="text" ref="todoText" placeholder="What you need to do?"/>
            <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
