class App extends React.Component{
render(){
return (
<div>
<Hello 
to="Ringo" 
from="paul" 
num={3}
data={[1,2,3,4,5]}
isFunny={true}
/>

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