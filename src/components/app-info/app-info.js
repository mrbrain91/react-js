import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Obshee chislo sotrudnikov: {employees} </h2>
            <h2>Premiyu poluchat: {increased}</h2>
        </div>
    )
}


export default AppInfo;