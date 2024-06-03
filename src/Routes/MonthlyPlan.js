import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './monthlyplan.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';

const MonthlyPlan = () => {
  const Year = [
    '2024', '2025', '2026','2027'
  ];
  const Month = [
    'Januray','February','March','April','May','June','July','August','September','October','November','December'
  ];
  return (
    <div>
        <Navbar/>
        <div className='monthly-plan-middle-part'>
          <div className='monthly-plan-middle-part-1st-row'>
            <div1>Personal Report</div1>
            <Dropdown options={Month}  placeholder="Month" />
            <Dropdown options={Year}  placeholder="Year" />
            <div2>Total Days 
            </div2>
              <input type='number'/>
          </div>

          <div className='monthly-plan-data-part'>
            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-topic'>
                Quran Study(Ayahs)
              </div>
              <div className='monthly-plan-data-part-days'>
                Days
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Study(Ayahs)
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Memorization
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Dars
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>

            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-topic'>
                Hadith(Numbers)
              </div>
              <div className='monthly-plan-data-part-days'>
                Days
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Study(Ayahs)
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Memorization
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Dars
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>

            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Literature Study(Pages)
              </div>
              <div className='monthly-plan-data-part-days'>
                Islamic
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Others
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>
            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Namaz(Waqt)
              </div>
              <div className='monthly-plan-data-part-days'>
                Jamaa'h
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Qadha
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>
            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Contact(Number)
              </div>
              <div className='monthly-plan-data-part-days'>
                Workers
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Ruqon
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>
            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Distribution(Number)
              </div>
              <div className='monthly-plan-data-part-days'>
                Islamic Book
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Others
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>
            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Meet Up(Number)
              </div>
              <div className='monthly-plan-data-part-days'>
                Dawah Targeted
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Workers
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
              <div className='monthly-plan-data-part-days'>
                Ruqon
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>

            <div className='monthly-plan-data-part-1st-row'>
              <div className='monthly-plan-data-part-literature'>
                Org. Time(Hours)
              </div>
              <input className='monthly-plan-data-part-Number' type='number'/>
            </div>

            <div className='monthly-plan-change-saved'>Save</div>

            <div className='monthly-plan-middle-part-bottom-row'>
                <div className='monthly-plan-middle-part-add-new'>
                  <DownloadForOfflineIcon/>
                  Download 
                </div>
                <div className='monthly-plan-middle-part-add-new'>
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

export default MonthlyPlan