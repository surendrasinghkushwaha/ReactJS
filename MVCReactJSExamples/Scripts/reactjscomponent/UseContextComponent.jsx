import UseConstComponent from "./UseConstComponent";
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class useContextComponent extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "well" as the current value.
        return (
            <ThemeContext.Provider value="well">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
const Toolbar=props=>  (
        <div className='row'>
            <div className="col-md-3"> use const
                 <UseConstComponent />
            </div> 
            use context
            <div className="col-md-3"> <ThemedButton />
              
            </div>
        </div>
    );
 

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return (
            <div className={this.context}>
                <button   >{this.context}</button>
            </div>
        );
    }
}

ReactDOM.render(<useContextComponent />, document.getElementById('root'));