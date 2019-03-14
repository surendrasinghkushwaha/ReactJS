/// <reference path="../react-bootstrap-table-4.3.1.js" /> 
//import { BootstrapTable, TableHeaderColumn } from "../react-bootstrap-table-4.3.1.js";

class ReactBootstrapTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentWillMount() {
        debugger;
        $.ajax({
            method: "GET",
            url: this.props.url + "?" + new Date().getTime(),
            dataType: "json",
            async: false,
            success: function (response) {
                debugger;
                var vresp = response;
                this.setState({ data: vresp });

            }.bind(this)//hint: .bind(this) not added to success function then this.setState is undefine
            ,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                debugger;
                alert(JSON.stringify(XMLHttpRequest.responseText));
            }
        });
    }
    render() {
        var BootstrapTable = window.BootstrapTable;
        var TableHeaderColumn = window.TableHeaderColumn;
        debugger;
        return (
            <div>
                <div className="row"><h3> BootstrapTable, with basic feature striped,hover, isKey,dataAlign,dataSort feature</h3>
                    <div style= {{height:300 ,overflowY:"scroll" }} >
                        <BootstrapTable data={this.state.data} striped={true} hover={true}  >
                            <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="index" dataSort={true}>index</TableHeaderColumn>
                            <TableHeaderColumn dataField="guid"  >guid</TableHeaderColumn>
                            <TableHeaderColumn dataField="isActive"  >isActive</TableHeaderColumn>
                            <TableHeaderColumn dataField="name"  >Product name</TableHeaderColumn>
                            <TableHeaderColumn dataField="balance"  >Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField="picture"  >picture</TableHeaderColumn>
                            <TableHeaderColumn dataField="age"  >age</TableHeaderColumn>
                            <TableHeaderColumn dataField="eyeColor"  >eyeColor</TableHeaderColumn>
                            <TableHeaderColumn dataField="email"  >email</TableHeaderColumn>
                        </BootstrapTable>
                    </div></div>
                <div className="row"><h3> BootstrapTable, with basic feature with pagination</h3>
                    <BootstrapTable data={this.state.data} striped={true} hover={true} pagination >
                        <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="index" dataSort={true}>index</TableHeaderColumn>
                        <TableHeaderColumn dataField="guid"  >guid</TableHeaderColumn>
                        <TableHeaderColumn dataField="isActive"  >isActive</TableHeaderColumn>
                        <TableHeaderColumn dataField="name"  >Product name</TableHeaderColumn>
                        <TableHeaderColumn dataField="balance"  >Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField="picture"  >picture</TableHeaderColumn>
                        <TableHeaderColumn dataField="age"  >age</TableHeaderColumn>
                        <TableHeaderColumn dataField="eyeColor"  >eyeColor</TableHeaderColumn>
                        <TableHeaderColumn dataField="email"  >email</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ReactBootstrapTableComponent url="/scripts/dummydata/SampleProduct.json" />, document.getElementById('root'));