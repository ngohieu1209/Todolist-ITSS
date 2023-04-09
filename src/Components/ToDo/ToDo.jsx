import { useState } from "react"
import { ButtonTransparent, ButtonUI } from "../ButtonUI/ButtonUIStyles"
import { InputContainer, InputUI } from "../InputUI/InputStyles"
import { LiItems, ULContainer } from "../TaskList/TaskListStyles";
import { FaTrash } from 'react-icons/fa'


const ToDo = () => {
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('task')) ||[])

    const saveToLocalStorage = todoList => {
        localStorage.setItem('task', JSON.stringify(todoList))
    }

    saveToLocalStorage(todoList)

    const handleInput = e => {
        setText(e.target.value)
    }

    const agregarLista = (e) => {
        e.preventDefault();

        if (text === '') {
            return;
        }

        const todoListTemp = {
            id: Date.now(),
            task: text,
        }

        const taskList = [...todoList, todoListTemp]
        setTodoList(taskList);
        saveToLocalStorage(todoList)


        setText('')
    }

    const deleteList = (e) => {
        e.preventDefault();
        if (!todoList.length) {
            return;
        }

        if (
          window.confirm(
            'Are you sure you want to remove all items from the list?'
          )
        ) {
          setTodoList([]);
          saveToLocalStorage(todoList);
        }
        return;
    }

    const deleteItem = e => {
        if (!e.target.classList.contains('trashIcon')) return;


        const elementId = e.target.dataset.idef;
        const taskFilter = todoList.filter(task => task.id != elementId)

        setTodoList(taskFilter)
        saveToLocalStorage(todoList)
    }

    return (
      <>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>TodoList</h1>
        <InputContainer onSubmit={agregarLista}>
          <InputUI
            type='text'
            onChange={handleInput}
            value={text}
            autoComplete='off'
            placeholder='Enter a task'
          />
          <ButtonUI type='submit'>Add</ButtonUI>
          <ButtonUI
            type='button'
            color='true'
            onClick={deleteList}
            disabled={!todoList.length ? true : false}
          >
            Delete List
          </ButtonUI>
        </InputContainer>

        <ULContainer onClick={deleteItem}>
          {todoList.map((task) => (
            <LiItems key={task.id}>
              {task.task}
              <ButtonTransparent className='trashIcon' data-idef={task.id}>
                <FaTrash
                  style={{
                    color: 'rgba(235, 0, 70, 1)',
                    padding: '2px',
                    fontSize: '28px',
                    pointerEvents: 'none',
                  }}
                />
              </ButtonTransparent>
            </LiItems>
          ))}
        </ULContainer>
      </>
    );
}
export default ToDo

