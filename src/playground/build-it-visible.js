// Visibility toggle app
class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this); 
    this.state = {
        title: 'Visibility toggle',
        details: 'These are the details that are suppose to be shown',
        visibility: false
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
      return (
          <div>
              {this.state.title ? <h1>{this.state.title}</h1> : ''}
              {this.state.subtitle && <p>{this.state.subtitle}</p>}
              <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
              {this.state.visibility && (<p>{this.state.details}</p>)}
          </div>
      );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));