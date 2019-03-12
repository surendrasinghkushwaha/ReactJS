
class ChildButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recievedValue: this.props.parentValue };
        //this.buttonClick = this.buttonClick.bind(this);
    }
     
    buttonClick() { 
        var localtime = new Date().toLocaleTimeString();
        this.props.parentMethod(localtime);
    }
    render() {
        return (
            <div className="form-group well">
                state-{this.state.recievedValue}
                <br />
                props-{this.props.parentValue}
                <br />
                <button className="btn btn-success" onClick={this.buttonClick.bind(this)}>passing value to parent </button>
            </div>
        );
    }
}

export default ChildButtonComponent;