export default function TabButton({children , onSelect, isSelected}){    

return (
    <li>
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>   
    );                                              
}
//Or you can use props and you it inside of the function as a object
// and you can do like return <li><button>{props.children}</button></li> 