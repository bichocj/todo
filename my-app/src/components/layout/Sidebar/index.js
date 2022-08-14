const Sidebar = () => (
    <div className="col-2">
        <div className="card rounded-4">
        <div className="card-body p-0 py-2">
            <div className='text-center mb-4 pb-4'>
                <img src='/rvn_logo.png' alt='logo'/>
            </div>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">
                <i className="bi bi-grid"></i>
                <span className='mx-3 fw-bold'>DASHBOARD</span>
                </li>
                <li className="list-group-item">
                <i className="bi bi-list"></i>
                <span className='mx-3 fw-bold'>MY TASK</span>
                </li>
            </ul>              
        </div>
        </div>
    </div>
);

export default Sidebar;