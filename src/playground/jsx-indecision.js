console.log('app is running');

//JSX- JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer',
    // options: ['One', 'Two']
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);   
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            {app.title ? <h1>{app.title}</h1> : ''}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'} </p>
        <p>{app.options.length}</p>
        <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
          <button onClick={removeAll}>Remove all</button>
          <ol>
          {/* render the app options*/ 
            app.options.map((option) => {
              return <li key={option}>{option}</li>;
            })
            } 
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
          </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp(); 


