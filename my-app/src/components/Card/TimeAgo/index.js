import { MONTH_NAMES, DAY_IN_MS } from '../../../utils/constants';

const TimeAgo = ({date}) => {
    const timeAgo = new Date(date);
    const today = new Date();
    const isCreatedToday = () => {
        return today.toDateString() === timeAgo.toDateString();
    };
    const isCreatedYesterday = () => {
        const yesterday = new Date(today - DAY_IN_MS);
        return yesterday.toDateString() === timeAgo.toDateString();
    };
    
    if(isCreatedToday()) {
        return (
            <span className="badge bg-dark">
                <i className="bi bi-clock"></i> TODAY
            </span>
        );
    }
    if(isCreatedYesterday()) {
        return (
            <span className="badge bg-dark text-danger">
                <i className="bi bi-clock"></i> YESTERDAY
            </span>
        );
    }
    const day = timeAgo.getDate();
    const month = MONTH_NAMES[timeAgo.getMonth()];
    const year = timeAgo.getFullYear();
    return (
        <span className="badge bg-dark">
            <i className="bi bi-clock"></i> {day} {month}, {year}
        </span>
    );
}

export default TimeAgo;