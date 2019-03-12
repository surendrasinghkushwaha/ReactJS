
class ChildCompReceivePropComponent extends React.Component {
    constructor(props) {
        super(props); debugger;
        this.state = { recievedValue: this.props.parentValue };
       this.buttonClick = this.buttonClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({ recievedValue: nextProps.parentValue });
    }
    buttonClick() {
        var localtime = new Date().toLocaleTimeString();
        debugger;
        this.props.parentMethod(localtime);
    }
    render() {
        return (
            <div className="form-group well">
                state-{this.state.recievedValue}
                <br />
                props-{this.props.parentValue}
                <br /> 
                <button className="btn btn-success" onClick={this.buttonClick }>passing value to parent </button>
            </div>
        );
    }
}

export default ChildCompReceivePropComponent;

