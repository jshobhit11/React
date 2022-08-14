class App extends React.Component{
render(){
return (
<div>
<Hello />
<Hello />
<Hello />
</div>
)

}
}
 ReactDOM.render(<App />,
   document.getElementById('root'));

// class JsxDemo extends React.Component {
//   render() {
//     return (
//     <div>
//     <h1>My number is: [2*4]</h1>
//    </div>
//     );
//   }
// }

// ReactDom.render(<JsxDemo />,document.getElementById('root'));