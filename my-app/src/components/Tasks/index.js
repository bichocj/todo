import Actions from './Actions';
import ColumnCards from '../ColumnCards';
import Loader from '../Loader';
import { useGetTasks } from '../../api';
import { useEffect, useState } from 'react';

const Tasks = () => {
    const { data, isLoading, refetch } = useGetTasks();    
    const [tags, setTags] = useState([]);
    useEffect(() => {
        if(data) {
            const tmpTasks = data.tasks.reduce((prev, current) => {
                current.tags.forEach(t => {
                    if(!prev.includes(t)) {
                        prev.push(t)
                    }                    
                });
                return prev
            }, []);
            setTags(tmpTasks);
        }
    }, [data]);

    
    return (
            <div>
            <Actions tags={tags} refetchTasks={refetch} />
            { isLoading ? (
                <Loader />
                ) : (
                <div className='row text-white text-bold mt-4 '>
                    <ColumnCards title={'BACKLOG'} status={'BACKLOG'} tasks={data.tasks} />
                    <ColumnCards title={'CANCELLED'} status={'CANCELLED'} tasks={data.tasks} />
                    <ColumnCards title={'TODO'} status={'TODO'} tasks={data.tasks} />
                    <ColumnCards title={'In Progress'} status={'IN_PROGRESS'} tasks={data.tasks} />
                    <ColumnCards title={'DONE'} status={'DONE'} tasks={data.tasks} />
                </div>
                )
            }
        </div>
    );
};

export default Tasks;