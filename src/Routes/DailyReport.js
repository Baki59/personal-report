import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import './daily-report.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from "react-select";
import {Container,Row,Col} from 'react-bootstrap';
import Box from "@mui/material/Box";
import BorderedSection from './BorderSection';



const DailyReport = () => {
  const [date,setDate] = useState(null);
  const [month,setMonth] = useState(null);

  const Day = [
    '1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12','13', '14', '15','16', '17', '18','19', '20', '21','22', '23', '24','25', '26', '27','28', '29', '30','31'
  ];
  const Month = [
    'Januray','February','March','April','May','June','July','August','September','October','November','December'
  ];
  const defaultDay = Day[0];
  const defaultMonth = Month[0];

  const handleDateChange = (obj) => {
    setDate(obj);
  };
  const handleMonthChange = (obj) => {
    setMonth(obj);
  };

  return (
    <div>
        <Navbar/>
        <div className='daily-report-middle-part'>
          <div className='daily-report-middle-part-1st-row'>
            <div1>Personal Report</div1>
            <Dropdown options={Day}  placeholder="Day" />
            <Dropdown options={Month}  placeholder="Month" />

          </div>

          {/* <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Quran(Ayah)</div><hr/>
            </div1>
            <div2>
              <div21>
                <div211>Reading</div211>
                <input type='number'/>
              </div21>
              <div21>Memorization
                <input type='number'/>
              </div21>
              <div21>Dars
                <input type='number'/>
              </div21>
            </div2>
          </div>
          <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Hadith(Number)</div><hr/>
            </div1>
            <div2>
              <div21>
                <div211>Reading</div211>
                <input type='number'/>
              </div21>
              <div21>Memorization
                <input type='number'/>
              </div21>
              <div21>Dars
                <input type='number'/>
              </div21>
            </div2>
          </div>

          <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Literature(Number)</div><hr/>
            </div1>
            <div2>
              <div21>
                <div211>Islamic</div211>
                <input type='number'/>
              </div21>
              <div21>Others
                <input type='number'/>
              </div21>
            </div2>
          </div>

          <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Namaz(Waqt)</div><hr/>
            </div1>
            <div2>
              <div21>Jama't
                <input type='number'/>
              </div21>
              <div21>Kadha
                <input type='number'/>
              </div21>
            </div2>
          </div>

          <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Contact(Number)</div><hr/>
            </div1>
            <div2>
              <div21>Worker
                <input type='number'/>
              </div21>
              <div21>Ruqon
                <input type='number'/>
              </div21>
            </div2>
          </div>

          <div className='daily-report-middle-part-2nd-row'>
            <div1>
              <div>Distribution(Number)</div><hr/>
            </div1>
            <div2>
              <div21>Islamic
                <input type='number'/>
              </div21>
              <div21>Others
                <input type='number'/>
              </div21>
            </div2>
          </div> */}

          <Container className='daily-report-middle-part-2nd-row'>
            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Quran(Ayah)</Col><hr/>
            </Row>
            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Reading</Col>
              <Col><input type='number'/></Col>
              <Col>Memorization</Col>
              <Col><input type='number'/></Col>
              <Col>Dars</Col>
              <Col><input type='number'/></Col>
            </Row>
            <Row className='daily-report-middle-part-2nd-row-row'>
                <Col>Hadith(Number)</Col><hr/>
            </Row>
            <Row className='daily-report-middle-part-2nd-row-row'>
            <Col>Reading</Col>
              <Col><input type='number'/></Col>
              <Col>Memorization</Col>
              <Col><input type='number'/></Col>
              <Col>Dars</Col>
              <Col><input type='number'/></Col>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
                <Col>Literature(Pages)</Col><hr/>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Islamic</Col>
              <Col><input type='number'/></Col>
              <Col>Others</Col>
              <Col><input type='number'/></Col>
              <Col xs={4}></Col>
              <Col xs={3}></Col>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
                <Col>Namza(Waqt)</Col><hr/>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Jama't</Col>
              <Col><input type='number'/></Col>
              <Col>Kadha</Col>
              <Col><input type='number'/></Col>
              <Col xs={4}></Col>
              <Col xs={3}></Col>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
                <Col>Contact(Num)</Col><hr/>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Workers</Col>
              <Col><input type='number'/></Col>
              <Col>Ruqon</Col>
              <Col><input type='number'/></Col>
              <Col xs={4}></Col>
              <Col xs={3}></Col>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
                <Col>Distribution(Num)</Col><hr/>
            </Row>

            <Row className='daily-report-middle-part-2nd-row-row'>
              <Col>Islamic</Col>
              <Col><input type='number'/></Col>
              <Col>Others</Col>
              <Col><input type='number'/></Col>
              <Col xs={4}></Col>
              <Col xs={3}></Col>
            </Row>

            <BorderedSection title="Title only">
                <div>a first child with quite a long text</div>
                <div>a second child</div>
            </BorderedSection>
          </Container>
          

        </div>
        <MyFooter/>
    </div>
  )
}

export default DailyReport