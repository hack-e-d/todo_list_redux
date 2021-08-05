import React from 'react'
import './TodoIO.css';

import Checkbox from '@material-ui/core/Checkbox';
import { setCheck } from '../../features/todoSlice';
import { useDispatch } from 'react-redux';

const TodoIO = ({name, done, id}) => {
const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
    }
    
    return (
        <div className='todo-item'>
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox'}}
                />
            <p className={done && 'todo-item--done'}>{name}</p>  
        </div>
    )
}

export default TodoIO
