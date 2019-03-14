/// <reference path="../react-bootstrap-table-4.3.1.js" /> 
//import { BootstrapTable, TableHeaderColumn } from "../react-bootstrap-table-4.3.1.js";

const EnumStatus = {
    default: "default",
    primary: "primary",
    success: "success",
    info: "info",
    danger: "danger",
    wearning: "wearning"
};
const initialdata = { id: 0, name: "", email: "", age: 18, education: "MCA" };
const temptabledata = [{ id: 1000002, name: "bbc", email: "abc@gmail.com", age: 18, education: "MCA" },
{ id: 1000003, name: "cbc", email: "bbc@gmail.com", age: 18, education: "MCA" },
{ id: 1000004, name: "dbc", email: "cbc@gmail.com", age: 18, education: "MCA" },
{ id: 1000005, name: "ebc", email: "dbc@gmail.com", age: 18, education: "MCA" }];
class ReactBootstrapTableCRUDComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(JSON.stringify(initialdata)),
            tabledata: JSON.parse(JSON.stringify(temptabledata)),
            validationmsg: "",
            status: EnumStatus.default
        };
        this.handleAddEvent = this.handleAddEvent.bind(this);
        this.handleClearEvent = this.handleClearEvent.bind(this);
    }
    isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    updateStateData(data_, msg, status) {
        this.setState({
            data: data_,
            message: "",
            status: status
        });
    }

    changeValueName(event) {
        var data_ = this.state.data;
        data_.name = event.target.value;
        this.updateStateData(data_, "", EnumStatus.default);
    }
    changeValueAge(event) {
        var data_ = this.state.data;
        data_.age = event.target.value;
        this.updateStateData(data_, "", EnumStatus.default);
    }
    changeValueEmail(event) {
        var data_ = this.state.data;
        data_.email = event.target.value;
        this.updateStateData(data_, "", EnumStatus.default);
    }
    changeValueEducation(event) {
        var data_ = this.state.data;
        data_.education = event.target.value;
        this.updateStateData(data_, "", EnumStatus.default);
    }
    handleClearEvent() {
        this.setState({
            data: initialdata,
            message: "Field is clear, Now you can add new record.",
            status: EnumStatus.info
        });
    }
    handleAddEvent() {
        debugger;
        var data = this.state.data;
        data.id = new Date().getTime();
        data.name = $('input[name=name]').val();
        data.age = $('input[name=age]').val();
        data.email = $('input[name=email]').val();
        data.education = $('input[name=education]').val();
        var msg = "";
        if (data.name === "") {
            msg += "Name is required. ";
        }
        if (data.email === "" || this.isEmail(data.email)) {
            msg += "Email is required. and should be valid email ";
        }
        if (data.age < 18) {
            msg += "Age should be grater than 18 year is required. ";
        }
        if (data.education === "") {
            msg += "Education is required. ";
        }
        if (msg !== "") {
            this.setState({ message: msg, status: EnumStatus.danger });
        }
        else {
            var tabledata_ = [];
            tabledata_ = this.state.tabledata;
            tabledata_.push(data);
            this.setState({
                data: JSON.parse(JSON.stringify(initialdata)),
                tabledata: tabledata_,
                message: "Record added successfully.",
                status: EnumStatus.success
            });
        }

    }
    handleUpdateEvent() {
        debugger;
        var data = this.state.data;
        data.id = $('input[name=id]').val();
        data.name = $('input[name=name]').val();
        data.age = $('input[name=age]').val();
        data.email = $('input[name=email]').val();
        data.education = $('input[name=education]').val();
        var msg = "";
        if (data.name === "") {
            msg += "Name is required. ";
        }
        if (data.email === "" || this.isEmail(data.email)) {
            msg += "Email is required. and should be valid email ";
        }
        if (data.age < 18) {
            msg += "Age should be grater than 18 year is required. ";
        }
        if (data.education === "") {
            msg += "Education is required. ";
        }
        if (msg !== "") {
            this.setState({ message: msg, status: EnumStatus.danger });
        }
        else {
            var tabledata_ = [];
            tabledata_ = this.state.tabledata;
            $.each(tabledata_, function (idx, data_) {
                if (data_.id === data.id) {
                    data_ = data;
                    console.log('Record find old data:' , data_);
                    console.log('Record find new data:' , data);
                    return false;
                }
            });
            tabledata_.push(data);
            this.setState({
                data: JSON.parse(JSON.stringify(initialdata)),
                tabledata: tabledata_,
                message: "Record updated successfully.",
                status: EnumStatus.success
            });
        }

    }
    handleDeleteEvent() {
        debugger;
        var data = this.state.data;
        data.id = $('input[name=id]').val();
        
        var msg = "";
        if (data.id === 0) {
            msg += "Please select record then delete. ";
        }
        
        if (msg !== "") {
            this.setState({ message: msg, status: EnumStatus.danger });
        }
        else {
            var tabledata_ = [];
            tabledata_ = this.state.tabledata; 

            tabledata_ = $.grep(tabledata_, function (data_) {
                return data_.id !== data.id;
            });
            
            this.setState({
                data: JSON.parse(JSON.stringify(initialdata)),
                tabledata: tabledata_,
                message: "Record deleted successfully.",
                status: EnumStatus.success
            });
        }

    }
    handleRefreshEvent() {
        this.setState({
            data: JSON.parse(JSON.stringify(initialdata)),
            tabledata: JSON.parse(JSON.stringify(temptabledata)), 
            message: "Now old record restore.",
            status: EnumStatus.success
        });
    }
    _validateFunctionFillForm(row) {
        this.setState({
            data: row, 
            message: "Record fill successfully. Now you can edit the record.",
            status: EnumStatus.info
        });
        alert("record Key id :" + row.id);
        console.log("activity id :" + row.id);
    }
    buttonFunction(cell, row) {
        return (<label>
            <button type="button"
                id="validatebutton"
                onClick={() => { this._validateFunctionFillForm(row) }}
                className="btn btn-primary btn-sm">
                Edit
                </button>
        </label>);
    }
    getTable(tabledata) {
        debugger;
        var BootstrapTable = window.BootstrapTable;
        var TableHeaderColumn = window.TableHeaderColumn;
        if (tabledata.length > 0) {
            return (<BootstrapTable data={tabledata} striped={true} hover={true}   pagination >
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}> ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="email"  >Email</TableHeaderColumn>
                <TableHeaderColumn dataField="age"  >Age</TableHeaderColumn>
                <TableHeaderColumn dataField="education"  >Education</TableHeaderColumn>
                <TableHeaderColumn dataField="button" dataFormat={this.buttonFunction.bind(this)}></TableHeaderColumn>
            </BootstrapTable>);
        } else { return <label className="label label-info">No record exists.</label>; }
    }
    render() {
        debugger;
        return (
            <div>
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading"><h3> add record</h3></div>
                        <div className="panel-body">
                            <div className="row">
                                <label className={"label label-" + this.state.status}>{this.state.message}</label>
                            </div>
                            <div className="row">
                                <div className="col-md-4" >

                                    <div className="form-group" >
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" name="name" onChange={this.changeValueName.bind(this)} value={this.state.data.name} />
                                        <input type="hidden" name="id" value={this.state.data.id} />
                                    </div>
                                    <div className="form-group" >
                                        <label htmlFor="name">Age:</label>
                                        <input type="number" className="form-control" name="age" onChange={this.changeValueAge.bind(this)} value={this.state.data.age} /><span> year</span>
                                    </div>
                                </div>
                                <div className="col-md-4" >
                                    <div className="form-group" >
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" name="email" onChange={this.changeValueEmail.bind(this)} value={this.state.data.email} />
                                    </div>
                                    <div className="form-group" >
                                        <label htmlFor="education">Education:</label>
                                        <input type="text" className="form-control" name="education" onChange={this.changeValueEducation.bind(this)} value={this.state.data.education} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <button className="btn btn-primary" onClick={this.handleAddEvent} > Add </button>
                            <button className="btn btn-warning" onClick={this.handleUpdateEvent.bind(this)} > Update </button>
                            <button className="btn btn-danger" onClick={this.handleDeleteEvent.bind(this)} > Delete </button>
                            <button className="btn btn-default" onClick={this.handleClearEvent} > Clear </button>
                            <button className="btn btn-info" onClick={this.handleRefreshEvent.bind(this)} > Refresh </button>

                        </div>
                    </div>
                </div>
                <div className="row"><h3> BootstrapTable, with basic feature with pagination</h3>
                    {this.getTable(this.state.tabledata)}

                </div>
            </div>
        );
    }
}

ReactDOM.render(<ReactBootstrapTableCRUDComponent />, document.getElementById('root'));