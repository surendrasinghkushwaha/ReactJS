import ProductTableComponent from "./ProductTableComponent.jsx";
import TextBoxComponent from "./TextBoxComponent.jsx";
class FilterDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
        this.handleGetFilterDataclick = this.handleGetFilterDataclick.bind(this);

    }
    componentWillMount() {
        $.ajax({
            method: "GET",
            url: this.props.url,
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
    handleGetFilterDataclick(value) {
        debugger;
        var param = JSON.stringify({ item: value });
        $.ajax({
            method: "POST",
            url: "/ReactJSButton/GetProductItem",
            data: param,
            contentType: "application/json; charset=UTF-8",
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
            <div >
                <div className="row">
                    <label>Filter Section</label>
                    <TextBoxComponent parentmethod={this.handleGetFilterDataclick} />
                </div>

                <div className="row">
                    <h3>output </h3>
                </div>
                <div className="row">
                    <ProductTableComponent productdata={this.state.data} />
                </div>
            </div>
        );
    }
}
ReactDOM.render(<FilterDataComponent url="/ReactJSButton/GetProductItems" />, document.getElementById('root'));



