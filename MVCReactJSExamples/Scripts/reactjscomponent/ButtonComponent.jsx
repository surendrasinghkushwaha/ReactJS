import ChildButtonComponent from "./ChildButtonComponent.jsx";
import ChildCompReceivePropComponent from "./ChildCompReceivePropComponent.jsx";
import TextBoxChangeEventUpdateStateComponent from "./TextBoxChangeEventUpdateStateComponent.jsx";
import ProductTableComponent from "./ProductTableComponent.jsx";
class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', data: {}
        };
        this.handleStateclick = this.handleStateclick.bind(this);
        this.handleGetDataclick = this.handleGetDataclick.bind(this);
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
    handleGetDataclick() {
        debugger;
        $.ajax({
            method: "GET",
            url: "/ReactJSButton/GetProductItems",
            dataType: "json",
            success: function (response) {
                var vresp = response;
                this.setState({ data: vresp.result });

            }.bind(this),
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(JSON.stringify(XMLHttpRequest.responseText));
            }
        });

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
                    <div className="col-md-3"> independent clild Component not takeing any prop
                        <TextBoxChangeEventUpdateStateComponent  />
                    </div>
                </div>
                <hr />
                bring data when button click
                <br />
                <div className="row">
                    <button className="btn btn-primary" onClick={this.handleGetDataclick}>
                        click to get data
                </button>
                </div>
                <div className="row">
                    <h3>output </h3>
                </div>
                <hr />
                <div className="row"> child component
                    <ProductTableComponent productdata={this.state.data} />
                </div>
            </div>
        );
    }
}//
ReactDOM.render(<ButtonComponent />, document.getElementById('root'));