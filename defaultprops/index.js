class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="RINGO" from="paul" bangs={4} />
        <Hello to="RINGO" bangs={4} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
 