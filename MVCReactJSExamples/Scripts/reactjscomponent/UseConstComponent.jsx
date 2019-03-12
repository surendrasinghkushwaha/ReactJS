class UseConstComponent extends React.Component {
    render() {
        return <Toolbar mycustomdata="dark" />;
    }
}

const Toolbar = props => (
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components. 
    <div>
        <ThemedButton mycustomdata={props.mycustomdata} />
    </div>
);

class ThemedButton extends React.Component {
    render() {
        return <button  > {this.props.mycustomdata} </button>;
    }
}
export default UseConstComponent;
