const Childtodo = (props) => {
    const {menu, deleteList} = props;
const handleDelete = (id) => {
        deleteList(id)
}

    return(
        <div className="Menulist">
            {menu.map(todo => {
                return(
                    <li key={todo.id}>{todo.product} - {todo.price} $
                     &nbsp; <span onClick={() => handleDelete(todo.id)}>X</span> 
                     </li>
                )
            })}
        </div>
    )
}

export default Childtodo