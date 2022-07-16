import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin</span>
        </div>
        <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
            </li>
            <p className="title">INTERFACE</p>
            <li>
              <SettingsIcon className="icon"/>
              <span>Components</span>
            </li>
            <li>
              <BuildTwoToneIcon className="icon"/>
              <span>Utilities</span>
            </li>
            <p className="title">ADDONS</p>
             <li>
              <FolderOpenTwoToneIcon className="icon"/>
              <span>Pages</span>
            </li>
             <li>
              <BarChartIcon className="icon"/>
              <span>Charts</span>
            </li>
             <li>
              <TableChartIcon className="icon"/>
              <span>Tables</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}


export default Sidebar