import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './monthlyplan.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareIcon from '@mui/icons-material/Share';
import { Col, Container, Row } from 'react-bootstrap';

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
            <div1>Monthly Plan</div1>
            <Dropdown options={Month}  placeholder="Month" />
            <Dropdown options={Year}  placeholder="Year" />
            <div2>Total Days 
            </div2>
              <input type='number'/>
          </div>

          <Container className='monthly-plan-data-part'>
            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-topic'>
                Quran Study(Ayahs)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Days
              </Col>
              <Col  >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Study(Ayahs)
              </Col>
              <Col >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Memorization
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Dars
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-topic'>
                Hadith(Numbers)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Days
              </Col>
              <Col  >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Study(Ayahs)
              </Col>
              <Col   >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Memorization
              </Col>
              <Col  >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Dars
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Literature Study(Pages)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Islamic
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Others
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Namaz(Waqt)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Jamaa'h
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Qadha
              </Col>
              <Col   >
              <input type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Contact(Number)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Workers
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Ruqon
              </Col>
              <Col >
              <input type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Distribution(Number)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Islamic Book
              </Col>
              <Col >
              <input type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Others
              </Col>
              <Col  >
              <input type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Meet Up(Number)
              </Col>
              <Col className='monthly-plan-data-part-days'>
                Dawah Targeted
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Workers
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              
              <Col className='monthly-plan-data-part-days'>
                Ruqon
              </Col>
              <Col>
              <input  type='number'/>
              </Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-literature'>
                Org. Time(Hours)
              </Col>
              <Col >
              <input  type='number'/>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              
            </Row>

            <Row className='monthly-plan-data-part-1st-row'>
              <Col className='monthly-plan-data-part-miss'>
                Miscellaneous
              </Col>

              <Col className='monthly-plan-data-part-miss-1st-column'>
                <Row className='monthly-plan-data-part-miss-1st-column-1st-row'>
                  <Col>Self Analysis</Col>
                  <Col>
                  <input type='number'/>
                  </Col>
                </Row>
                <Row className='monthly-plan-data-part-miss-1st-column-2nd-row'>
                  <Col>Social Work</Col>
                  <Col><input type='number'/></Col>
                </Row>
                <Row className='monthly-plan-data-part-miss-1st-column-3rd-row'>
                  <Col>Giving Loan</Col>
                  <Col>
                  <input type='number'/>
                  </Col>
                </Row>
              </Col>

              <Col className='monthly-plan-data-part-miss-2nd-column'>
                <Row className='monthly-plan-data-part-miss-2nd-column-1st-row'>
                  <Col>Family Meeting</Col>
                  <Col><input type='number'/></Col>
                </Row>
                <Row className='monthly-plan-data-part-miss-2nd-column-2nd-row'>
                  <Col>Visit</Col>
                  <Col><input type='number'/></Col>
                </Row>
                <Row className='monthly-plan-data-part-miss-2nd-column-3rd-row'>
                  <Col>Report(Days)</Col>
                  <Col><input type='number'/></Col>
                </Row>
              </Col>

            </Row>

            <div className='monthly-plan-data-part-comment'>
              <div1>Comment</div1>
              <textarea type='text'/>
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

          </Container>

          
          
        </div>
        <MyFooter/>
    </div>
  )
}

export default MonthlyPlan