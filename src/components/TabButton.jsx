export default function TabButton({children , onSelect}){    

return (
    <li>
    <button onClick={onSelect}>{children}</button>
    </li>   
    );                                              
}
//Or you can use props and you it inside of the function as a object
// and you can do like return <li><button>{props.children}</button></li> 