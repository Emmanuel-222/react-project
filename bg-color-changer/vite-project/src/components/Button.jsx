import './Button.css';

function Button({ value, changeColor }) {
 
  return (
    <button onClick={ changeColor }>{value}</button>
  )
}

export default Button;
