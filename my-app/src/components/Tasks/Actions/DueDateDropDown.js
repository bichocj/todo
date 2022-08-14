import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DueDateDropDown = ({value, onChange}) => {
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        if(value) {
            if (value instanceof Date && !isNaN(value)) {
                setStartDate(value);
            } else {
                setStartDate(new Date(value))
            }

        }
    }, [value])

    return (
        <div className="dropdown">
            <button className="btn btn-primary-outline text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-calendar-check-fill"></i> Due date
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuOffset">
                <li>
                    <DatePicker selected={startDate} onChange={onChange} />
                </li>
            </ul>
        </div>
    );
}

DueDateDropDown.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
}

export default DueDateDropDown;