import PropTypes from 'prop-types';

const LabelsDropDown = ({tags, value, onChange}) => {
    const updateTagsList = (tag) => {
        const alreadyExists = value.find(v => v === tag);
        if (alreadyExists) {
            onChange(value.filter(v => v !== tag))
            return;
        }
        onChange([...value, tag]);
    }

    return (
        <div className="dropdown">
            <button className="btn btn-primary-outline text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-bookmark"></i> Label
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuOffset">
                {
                    tags.map((p, i) => (
                        <li key={`estimate_${i}`} className='px-3'>
                            <div className="form-check">
                                <input
                                    id={`check_${i}`}
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value={p}                                     
                                    onChange={e => updateTagsList(e.target.value)}
                                    checked={value.includes(p)}
                                />
                                <label className="form-check-label" htmlFor={`check_${i}`}>
                                    { p }
                                </label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

LabelsDropDown.defaultProps = {
    tags: [],
    value: [],
}

LabelsDropDown.propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
}

export default LabelsDropDown;