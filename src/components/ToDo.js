function ToDo({ todo }) {
    return (
        <div className="item-todo">
            <div className="date-block">{todo.date}</div>{todo.task}
        </div>
    )
}

export default ToDo