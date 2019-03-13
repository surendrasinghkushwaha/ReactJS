class ProductLoadDataButtonClickComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
    handleClickEvent() {
        debugger;
        $.ajax({
            method: "GET",
            url: "/ReactJS/GetProductItems",
            dataType: "json",
            success: function (response) {
                var vresp = response;
                this.setState({ data: vresp.result });

            }.bind(this) //hint: .bind(this) not added to success function then this.setState is undefine
            , error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(JSON.stringify(XMLHttpRequest.responseText));
            }
        });

    }
    getcell(value) {
        return <td>{value}</td>;
    }
    getrow(row, i) {
        return <tr  ><th scope="row">{i + 1}</th> {this.getcell(row.item)}{this.getcell(row.description)}</tr>;
    }
    getrows(rows) {
        if (rows !== null && rows.length > 0) {
            debugger;
            return <tbody>{rows.map((row, i) => this.getrow(row, i))}</tbody>;
        }

    }
    /* getheader(props) {
         if (props !== null && props.length > 0) {
             debugger;
             var prop = {};
             if (props !== null && props.length > 0)
                 prop = props[0];
 
             return (prop.map((el, i) => <th scope="col">{el}</th>));
         }
 
     }*/
    render() {
        return (
            <div className="row">
                <div className="well"> this component have componentWillMount() wher we make Ajax call to bring data from server, its a good place to get initial data for componet
                </div>
                <button className="btn btn-success" onClick={this.handleClickEvent}>Load Data</button>
                <br/>
                <table className="table table-bordered">
                    <thead>
                        <tr> <th>#</th><th>Item</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {this.getrows(this.state.data)}
                </table></div>
        );
    }
}


ReactDOM.render(<ProductLoadDataButtonClickComponent />, document.getElementById('root'));