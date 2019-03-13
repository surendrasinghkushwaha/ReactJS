 
class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);  
        this.changeValue = this.changeValue.bind(this);
       // this.filterclickevent = this.filterclickevent.bind(this);
     } 
    changeValue() {
        console.log('Placeholder to prevent bug');
    }
    filterclickevent() {
        var itemname = $('[name="mytextbox"]').val();
        this.props.parentmethod(itemname);
    }
    render() {
        return (<div className="form-group ">
            <label htmlFor="mytextbox">Item Name</label>
            <input className="form-control"
                onChange={this.changeValue}
                name="mytextbox"
                type="textbox"
                placeholder="Enter name" 
            /><button className="btn btn-success" onClick={this.filterclickevent.bind(this)}>Filter data </button>
        </div>
        );
    }
}
 
export default TextBoxComponent;