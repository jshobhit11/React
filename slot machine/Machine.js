// class Machine extends React.Component {
// render(){
// return <p>HI FROM MACHINE</p>

// }

// }
class Machine extends React.Component {
render(){
const {s1,s2,s3}=this.props;
const winner=s1===s2 && s2==s3;

return (
<div className="Machine">
<p>
{s1} {s2} {s3}
</p>
<p className={winner ? 'win' : 'lose'}>
{winner ? 'winner!' : 'Loser!'}</p>

</div>
)
}
}