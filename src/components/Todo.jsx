/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import Card from './card';
import Input from './input';
import Button from './button';
import { useState } from 'react';
export default function Todo() {
    const [newTask, setnewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();

        setTasks((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                isCompleted: false,
            },
        ]);
        // localStorage.getItem('tasks')
        // localStorage.setItem('tasks', JSON.stringify(tasks))
        setnewTask('');
    }

    function handleCompleteTask(id) {
       const updateTask = tasks.map((task)=>{
            if(id === task.id) {
                return {
                    ...task,
                    completed:!task.completed
                }
            }
            return task;
        })
        setTasks(updateTask);
    }
    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task)=> id !== task.id)
        setTasks(removeTask);

    }
    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className={'flex items-center gap-2'}>
                        <Input value={newTask} onChange={(e) => setnewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add Task'} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className={'space-y-2 mt-4'}>
                        {tasks.map((task) => (
                            <li key={task.id} className={'flex items-center justify-between'}>
                                <span>
                                    {task.name} {task.completed ? 'Complete' : 'Incomplete'}
                                </span>
                                <div className={'flex items-center gap-2'}>
                                    <Button onClick={()=>handleCompleteTask(task.id)} className={'px-2 py-1 border text-xs bg-red-600'}>
                                        Mark as {task.completed ? 'Incomplete' : 'Complete'}
                                        </Button>
                                    <Button onClick={()=>handleRemoveTask(task.id)} className={'px-2 py-1 border text-xs bg-yellow-500'}>delete</Button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks</Card.Footer>
        </Card>
    );
}
