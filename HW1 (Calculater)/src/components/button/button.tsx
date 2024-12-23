import './button.css'
interface Iprops {
 symbol : string,
 color : string,
 height: string,
 width:string
};


const Button = (props : Iprops) => {
   const style = {
      backgroundColor: props.color,
      height:props.height,
      width:props.width,
    };

return(
 <div style={style} className='button' >
    {props.symbol}
 </div>
)
}

export default Button;