export default function TabButton({children , isSelected, ...props}){    

return (
    <li>
    <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>   
    );                                              
}
//Or you can use props and you it inside of the function as a object
// and you can do like return <li><button>{props.children}</button></li> 