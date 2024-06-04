import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './report-summary.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const ReportSummary = () => {
  const Year = [
    '2024', '2025', '2026','2027'
  ];
  const Month = [
    'Januray','February','March','April','May','June','July','August','September','October','November','December'
  ];
  return (
    <div>
        <Navbar/>
        <div className='report-summary-middle-part'>
          <div className='report-summary-middle-part-1st-row'>
            <div1>Report Summary</div1>
            <Dropdown options={Month}  placeholder="Month" />
            <Dropdown options={Year}  placeholder="Year" />
            <div2>Total Days 
            </div2>
              <input type='number'/>
          </div>

          <div className='report-summary-data-part'>
            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-topic'>
                Quran Study(Ayahs)
              </div>
              <div className='report-summary-data-part-days'>
                Days
              </div>
              
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Study(Ayahs)
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Memorization 
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Dars
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <NorthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-topic'>
                Hadith (Numbers)
              </div>
              <div className='report-summary-data-part-days'>
                Days
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Study(Ayahs)
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Memorization
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Dars
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <SouthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Literature Study(Pages)
              </div>
              <div className='report-summary-data-part-days'>
                Islamic
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Others
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <NorthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Namaz(Waqt)
              </div>
              <div className='report-summary-data-part-days'>
                Jamaa'h
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Qadha
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <SouthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Contact (Number)
              </div>
              <div className='report-summary-data-part-days'>
                Workers
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Ruqon
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <NorthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Distribution (Number)
              </div>
              <div className='report-summary-data-part-days'>
                Islamic Book
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Others
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <SouthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Meet Up(Number)
              </div>
              <div className='report-summary-data-part-days'>
                Dawah Targeted
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Workers
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <div className='report-summary-data-part-days'>
                Ruqon
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <SouthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-literature'>
                Org. Time(Hours)
              </div>
              <input className='report-summary-data-part-Number' type='number'/>
              <NorthIcon/>
            </div>

            <div className='report-summary-data-part-1st-row'>
              <div className='report-summary-data-part-miss'>
                Miscellaneous
              </div>

              <div className='report-summary-data-part-miss-1st-column'>
                <div className='report-summary-data-part-miss-1st-column-1st-row'>
                  <div1>Self Analysis</div1>
                  <input></input>
                  <SouthIcon/>
                </div>
                <div className='report-summary-data-part-miss-1st-column-2nd-row'>
                  <div1>Social Work</div1>
                  <input></input>
                  <NorthIcon/>
                </div>
                <div className='report-summary-data-part-miss-1st-column-3rd-row'>
                  <div1>Giving Loan</div1>
                  <input></input>
                  <SouthIcon/>
                </div>
              </div>

              <div className='report-summary-data-part-miss-2nd-column'>
                <div className='report-summary-data-part-miss-2nd-column-1st-row'>
                  <div1>Family Meeting</div1>
                  <input></input>
                  <SouthIcon/>
                </div>
                <div className='report-summary-data-part-miss-2nd-column-2nd-row'>
                  <div1>Visit</div1>
                  <input></input>
                  <NorthIcon/>
                </div>
                <div className='report-summary-data-part-miss-2nd-column-3rd-row'>
                  <div1>Report(Days)</div1>
                  <input></input>
                  <SouthIcon/>
                </div>
              </div>

            </div>

            <div className='report-summary-data-part-comment'>
              <div1>Comment</div1>
              <textarea type='text'/>
            </div>

            <div className='report-summary-change-saved'>Save</div>

            <div className='report-summary-middle-part-bottom-row'>
                <div className='report-summary-middle-part-add-new'>
                  <DownloadForOfflineIcon/>
                  Download 
                </div>
                <div className='report-summary-middle-part-add-new'>
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

export default ReportSummary