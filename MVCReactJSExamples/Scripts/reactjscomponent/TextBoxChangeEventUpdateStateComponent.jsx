class TextBoxChangeEventUpdateStateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row well">
                <form className="form-group">
                    <label>
                        Name:(state-{this.state.value})
               <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="button" className="btn btn-warning" value="check state" onClick={this.handleSubmit.bind(this)} />
                </form>
            </div>
        );
    }
}
export default TextBoxChangeEventUpdateStateComponent;