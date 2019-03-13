import ChildButtonComponent from "./ChildButtonComponent.jsx";
import ChildCompReceivePropComponent from "./ChildCompReceivePropComponent.jsx";  
class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', data: {}
        };
        this.handleStateclick = this.handleStateclick.bind(this); 
    }

    handleStateclick() {
        debugger;
        if (this.state.title === "")
            this.setState({ title: 'changes Done..... ' });
        else this.setState({ title: '' });
    }
    handleChildCall(value) {
        debugger; 
            this.setState({ title: value }); 
    }
    
    render() {
        return (
            <div className="container" style={{ backgroundColor: "#cacaca" }}> prent component
                <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={this.handleStateclick}>
                        change child state-   {this.state.title}
                    </button>
                    </div>
                    <div className="col-md-3"> clild Component
                        <ChildButtonComponent parentValue={this.state.title} parentMethod={this.handleChildCall.bind(this)}/>
                    </div>
                    <div className="col-md-3"> clild Component have componentWillReceiveProps()
                        <ChildCompReceivePropComponent parentValue={this.state.title} parentMethod={this.handleChildCall.bind(this)}/>
                    </div>
                   
                </div>
                <hr />  
            </div>
        );
    }
}//
ReactDOM.render(<ButtonComponent />, document.getElementById('root'));