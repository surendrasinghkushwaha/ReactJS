class ProductTableComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    getcell(value) {
        return <td>{value}</td>;
    }
    getrow(prop,i) {
        return <tr  ><th scope="row">{i+1}</th> {this.getcell(prop.item)}{this.getcell(prop.description)}</tr>;
    }
    getrows(props) {
        if (props !== null && props.length > 0) {
            debugger;
            return <tbody>{props.map((el, i) => this.getrow(el,i)  )}</tbody>;
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
        return (<table className="table table-bordered">
            <thead>
                <tr> <th>#</th><th>Item</th>
                    <th>Description</th>
                </tr>
            </thead>
             {this.getrows(this.props.productdata)}
            
        </table>
        );
    }
}


export default ProductTableComponent;