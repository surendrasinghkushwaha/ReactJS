class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };

    }

    componentWillMount() {
        debugger;
        $.ajax({
            method: "GET",
            url: this.props.url,
            dataType: "json",
            success: function (response) {
                debugger;
                var vresp = response;
                this.setState({ data: vresp.result });

            }.bind(this) ,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(JSON.stringify(XMLHttpRequest.responseText));
            }
        });
    }

    render() {
        return (
            <div className="row">
                <div className="well"> this component have componentWillMount() wher we make Ajax call to bring data from server, its a good place to get initial data for componet
                </div>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}
ReactDOM.render(<HelloWorld url="/ReactJS/GetMessage" />, document.getElementById('root'));



