import Actions from './Actions';
import ColumnCards from '../ColumnCards';
import Loader from '../Loader';
import { useGetTasks } from '../../api';
import { useEffect, useState } from 'react';

const Tasks = () => {
    const { data, isLoading, refetch } = useGetTasks();
    const [tags, setTags] = useState([]);
    useEffect(() => {
        if (data) {
            const tmpTasks = data.tasks.reduce((prev, current) => {
                current.tags.forEach(t => {
                    if (!prev.includes(t)) {
                        prev.push(t)
                    }
                });
                return prev
            }, []);
            setTags(tmpTasks);
        }
    }, [data]);

    const columns = [
        { title: 'BACKLOG', status: 'BACKLOG' },
        { title: 'CANCELLED', status: 'CANCELLED' },
        { title: 'TODO', status: 'TODO' },
        { title: 'In Progress', status: 'IN_PROGRESS' },
        { title: 'Completed', status: 'DONE' },
    ];

    return (
        <div>
            <Actions tags={tags} refetchTasks={refetch} />
            {isLoading ? (
                <Loader />
            ) : (
                <div className='row text-white text-bold mt-4 '>
                    {
                        columns.map((column, i) => (
                            <ColumnCards
                                key={`column_${i}`}
                                title={column.title}
                                status={column.status}
                                tasks={data.tasks}
                                refetchTasks={refetch}
                                allTags={tags}
                            />
                        ))
                    }
                </div>
            )
            }
        </div>
    );
};

export default Tasks;