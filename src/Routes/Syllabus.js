import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import './syllabus.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Container,Row,Col} from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';
import { Checkbox } from 'flowbite-react';


const Syllabus = () => {
  return (
    <div>
        <Navbar/>
        <div className='syllabus-middle-part'>

          <div className='syllabus-middle-part-1st-row'>
            <div1>Syllabus</div1>
            <div2>Less Educated <Checkbox/></div2>
            <div2>Educated <Checkbox/></div2>
            <div3>Total Books </div3>
            <div4>70 </div4>
            <div3>Read </div3>
            <div4>30</div4>
          </div>
          
          <div className='syllabus-middle-part-grid'>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>SL</div>
              <div className='syllabus-middle-part-grid-header1'>Book's Name</div>
              <div className='syllabus-middle-part-grid-header1'>Writer's Name</div>
              <div className='syllabus-middle-part-grid-read'>Read?</div>
            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>1</div>
              <div  className='syllabus-middle-part-grid-header2'>Amin Hasan</div>
              <div  className='syllabus-middle-part-grid-header2'>Worker</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>

            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>2</div>
              <div className='syllabus-middle-part-grid-header2'>Raqibul Islam</div>
              <div className='syllabus-middle-part-grid-header2'>Associate</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>
            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>3</div>
              <div className='syllabus-middle-part-grid-header2'>Abdul Hamid</div>
              <div className='syllabus-middle-part-grid-header2'>Advanced Worker</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>
            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>4</div>
              <div className='syllabus-middle-part-grid-header2'>Amin Hasan</div>
              <div className='syllabus-middle-part-grid-header2'>Worker</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>
            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>5</div>
              <div className='syllabus-middle-part-grid-header2'>Raqibul Islam</div>
              <div className='syllabus-middle-part-grid-header2'>Associate</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>
            </div>
            <div className='syllabus-middle-part-grid-row'>
              <div className='syllabus-middle-part-grid-header-serial'>6</div>
              <div className='syllabus-middle-part-grid-header2'>Abdul Hamid</div>
              <div className='syllabus-middle-part-grid-header2'>Advanced Worker</div>
              <div className='syllabus-middle-part-grid-read-checkbox'><Checkbox/></div>
            </div>

            <div className='syllabus-change-saved'>Save</div>
            
            <div className='syllabus-middle-part-grid-bottom-row'>
              <div className='syllabus-middle-part-grid-add-new'>
                <DownloadForOfflineIcon/>
                Download 
              </div>
              <div className='syllabus-middle-part-grid-add-new'>
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

export default Syllabus