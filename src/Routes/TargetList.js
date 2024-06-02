import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import './target-list.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Container,Row,Col} from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';


const TargetList = () => {
  const Day = [
    '1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12','13', '14', '15','16', '17', '18','19', '20', '21','22', '23', '24','25', '26', '27','28', '29', '30','31'
  ];
  const Month = [
    'Januray','February','March','April','May','June','July','August','September','October','November','December'
  ];
  return (
    <div>
        <Navbar/>
        <div className='target-list-middle-part'>
          <div className='target-list-middle-part-1st-row'>
            <div1>Target List</div1>
            <Dropdown options={Day}  placeholder="Day" />
            <Dropdown options={Month}  placeholder="Month" />
          </div>
          <div className='target-list-middle-part-grid'>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header1'>Name</div>
              <div className='target-list-middle-part-grid-header1'>Type</div>
            </div>
            <div className='target-list-middle-part-grid-row'>
              <div  className='target-list-middle-part-grid-header2'>Amin Hasan</div>
              <div  className='target-list-middle-part-grid-header2'>Worker</div>
              <div  className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>

            </div>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header2'>Raqibul Islam</div>
              <div className='target-list-middle-part-grid-header2'>Associate</div>
              <div className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>
            </div>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header2'>Abdul Hamid</div>
              <div className='target-list-middle-part-grid-header2'>Advanced Worker</div>
              <div  className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>
            </div>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header2'>Amin Hasan</div>
              <div className='target-list-middle-part-grid-header2'>Worker</div>
              <div  className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>
            </div>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header2'>Raqibul Islam</div>
              <div className='target-list-middle-part-grid-header2'>Associate</div>
              <div  className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>
            </div>
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-header2'>Abdul Hamid</div>
              <div className='target-list-middle-part-grid-header2'>Advanced Worker</div>
              <div  className='target-list-middle-part-grid-icon'>
                <i class="fa fa-trash" aria-hidden="true" />
              </div>
            </div>

            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-add-new'>
                <AddCircleIcon/>
                Add New
              </div>
            </div>
            
            <div className='target-list-middle-part-grid-row'>
              <div className='target-list-middle-part-grid-add-new'>
                <DownloadForOfflineIcon/>
                Download 
              </div>
              <div className='target-list-middle-part-grid-add-new'>
                <ShareIcon/>
                Share
              </div>
            </div>

          </div>
        </div>
        <MyFooter/>
    </div>
  )
}

export default TargetList