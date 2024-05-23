import './App.css';
import Home from './Routes/Home';
import DailyReport from './Routes/DailyReport';
import ReportSummary from './Routes/ReportSummary';
import MonthlyPlan from './Routes/MonthlyPlan';
import TargetList from './Routes/TargetList';
import Syllabus from './Routes/Syllabus';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dailyreport' element={<DailyReport/>}/>
        <Route path='/reportsummary' element={<ReportSummary/>}/>
        <Route path='/monthlyplan' element={<MonthlyPlan/>}/>
        <Route path='/targetlist' element={<TargetList/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
