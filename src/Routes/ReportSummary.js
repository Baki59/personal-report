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
import { Col, Container, Row } from 'react-bootstrap';

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
              <div21>31</div21>
          </div>

          <Container className='report-summary-data-part'>
            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-topic'>
                Quran Study(Ayahs)
              </Col>
              <Col className='report-summary-data-part-days'>
                Days
              </Col>
              <Col className='report-summary-data-part-Number'>
                25
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Study(Ayahs)
              </Col>
              <Col className='report-summary-data-part-Number'>
                500
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Memorization 
              </Col>
              <Col className='report-summary-data-part-Number'>
                10
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Dars
              </Col>
              <Col  className='report-summary-data-part-Number' >
                10
              </Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col >
                <NorthIcon className='report-summary-upper-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-topic'>
                Hadith (Numbers)
              </Col>
              <Col className='report-summary-data-part-days'>
                Days
              </Col>
              <Col className='report-summary-data-part-Number'>
              30
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Study(Nums)
              </Col>

              <Col className='report-summary-data-part-Number'>
              300
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Memorization
              </Col>
              <Col className='report-summary-data-part-Number'>
              10
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Dars
              </Col>
              <Col className='report-summary-data-part-Number'>
              10
              </Col>
              
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col  >
                <SouthIcon className='report-summary-lower-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Literature Study(Pages)
              </Col>
              <Col className='report-summary-data-part-days'>
                Islamic
              </Col>'
              <Col className='report-summary-data-part-Number'>
              1000
              </Col>
              
              <Col className='report-summary-data-part-days'>
                Others
              </Col>
              <Col className='report-summary-data-part-Number'>
                500
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col>
              <NorthIcon className='report-summary-upper-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Namaz(Waqt)
              </Col>
              <Col className='report-summary-data-part-days'>
                Jamaa'h
              </Col>
              <Col className='report-summary-data-part-Number'>
                150
              </Col>
              <Col className='report-summary-data-part-days'>
                Qadha
              </Col>
              <Col className='report-summary-data-part-Number' >
                2
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col>
              <SouthIcon className='report-summary-lower-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Contact (Number)
              </Col>
              <Col className='report-summary-data-part-days'>
                Workers
              </Col>
              <Col className='report-summary-data-part-Number'>
                5
              </Col>
              <Col className='report-summary-data-part-days'>
                Ruqon
              </Col>
              <Col className='report-summary-data-part-Number'>
                5
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col>
              <NorthIcon className='report-summary-upper-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Distribution (Number)
              </Col>
              <Col className='report-summary-data-part-days'>
                Islamic Book
              </Col>
              <Col className='report-summary-data-part-Number'>
                10
              </Col>
              <Col className='report-summary-data-part-days'>
                Others
              </Col>
              <Col className='report-summary-data-part-Number'>
                10
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              <Col>
              <SouthIcon className='report-summary-lower-arrow'/>
              </Col>
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Meet Up(Number)
              </Col>
              <Col className='report-summary-data-part-days'>
                Dawah Targeted
              </Col>
              <Col className='report-summary-data-part-Number'>
                5
              </Col>
              <Col className='report-summary-data-part-days'>
                Workers
              </Col>
              <Col className='report-summary-data-part-Number'>
                5
              </Col>
              <Col className='report-summary-data-part-days'>
                Ruqon
              </Col>
              <Col className='report-summary-data-part-Number'>
                5
              </Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>
              Quality
              </Col>
              
              <Col>
              <SouthIcon className='report-summary-lower-arrow'/>
              </Col>
              
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-literature'>
                Org. Time(Hours)
              </Col>
              <Col></Col>
              <Col className='report-summary-data-part-Number'>
                4
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col className='report-summary-data-part-days'>Quality</Col>
              <Col>
              <NorthIcon className='report-summary-upper-arrow'/>
              </Col>
              
              
            </Row>

            <Row className='report-summary-data-part-1st-row'>
              <Col className='report-summary-data-part-miss'>
                Miscellaneous
              </Col>
              

              <Col className='report-summary-data-part-miss-1st-column'>
                <Row className='report-summary-data-part-miss-1st-column-1st-row'>
                  
                  <Col>Self Analysis</Col>
                  <Col className='report-summary-data-part-Number'>30</Col>
                  <Col>
                  <SouthIcon className='report-summary-lower-arrow'/>
                  </Col>
                  
                </Row>
                <Row className='report-summary-data-part-miss-1st-column-2nd-row'>
                  <Col>Social Work</Col>
                  <Col className='report-summary-data-part-Number'>20</Col>
                  <Col>
                  <NorthIcon className='report-summary-upper-arrow'/>
                  </Col>
                  
                </Row>
                <Row className='report-summary-data-part-miss-1st-column-3rd-row'>
                  <Col>Giving Loan</Col>
                  <Col className='report-summary-data-part-Number'>2</Col>
                  <Col>
                  <SouthIcon className='report-summary-lower-arrow'/>
                  </Col>
                  
                </Row>
              </Col>
              

              <Col className='report-summary-data-part-miss-2nd-column'>
                <Row className='report-summary-data-part-miss-2nd-column-1st-row'>
                  <Col>Family Meeting</Col>
                  <Col className='report-summary-data-part-Number'>5</Col>
                  <Col>
                  <SouthIcon className='report-summary-lower-arrow'/>
                  </Col>
                  
                </Row>
                <Row className='report-summary-data-part-miss-2nd-column-2nd-row'>
                  <Col>Visit</Col>
                  <Col className='report-summary-data-part-Number'>5</Col>
                  <Col>
                  <NorthIcon className='report-summary-upper-arrow'/>
                  </Col>
                  
                </Row>
                <Row className='report-summary-data-part-miss-2nd-column-3rd-row'>
                  <Col>Report</Col>
                  <Col className='report-summary-data-part-Number'>30</Col>
                  <Col>
                  <SouthIcon className='report-summary-lower-arrow'/>
                  </Col>
                  
                </Row>
              </Col>
              <Col></Col>

            </Row>

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

          </Container>

          
          
        </div>
        <MyFooter/>
    </div>
  )
}

export default ReportSummary