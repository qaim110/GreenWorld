const display = {
  display: "block"
};
const hide = {
  display: "none"
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    };
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <h4>Modal Header</h4>
        </div>
        <div className="modal-footer">
          <a className="btn-flat" onClick={this.toggle}>
            Agree
          </a>
        </div>
      </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>
          {this.state.toggle ? "Close modal" : "Open modal"}
        </a>
        {modal}
        <a href="http://www.automationfuel.com/reactjs-modal/">
          Read the tutorial for this ReactJS modal
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Modal />, document.getElementById("root"));
