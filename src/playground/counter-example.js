class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    
    if (!isNaN(count)) {
      this.setState(()=> ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count +1 
      }
    });
  }

  handleMinusOne() {
    try { 
      let count = localStorage.getItem('count') ? (parseInt(localStorage.getItem('count')) - 1) : -1 ;
      localStorage.setItem('count', count);
    
      this.setState((prevState) => {
        return {
          count: count
        }
      });
    } catch (e) {
      // do nothing at all
    }
  }
  handleReset() {
    localStorage.setItem('count', 0);
    this.setState(() => {
      return {
        count: 0
      }
    });

    // Wrong way to do this.
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));