import React from "react";
import "./serviceStatus.css";
import checkImage from './imgaes/check.png';
import warning from './imgaes/warning.png'
import none from './imgaes/remove.png'

function ServiceStatus() {  
  return (
    <div id="container">
      <div id="service_header">
        <h2 id="service_h1">Service Status</h2>
      </div>
      <div id="modified">
        Last modified: 14th March, 2024 at 11:35am
      </div>
      <div id="services">
        <table id="main_table">
          <tr className="gray">
            <td>
              <table class="entry-container">
                <tr class="entry1">IT Service Desk System</tr>
                <tr class="entry2">Self-service portal, phone, FAQ</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr>
            <td>
              <table class="entry-container">
                <tr class="entry1">Library Systems</tr>
                <tr class="entry2">Search and services</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr className="gray">
            <td>
              <table class="entry-container">
                <tr class="entry1">MySIS</tr>
                <tr class="entry2">Student record system</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr>
            <td>
              <table class="entry-container">
                <tr class="entry1">MyTimetable</tr>
                <tr class="entry2">Student timetables, room bookings</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr className="gray">
            <td>
              <table class="entry-container">
                <tr class="entry1">Printing</tr>
                <tr class="entry2">Central Print Service, Student Printing</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr>
            <td>
              <table class="entry-container">
                <tr class="entry1">Remote Access</tr>
                <tr class="entry2"></tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr className="gray">
            <td>
              <table class="entry-container">
                <tr class="entry1">Telephony</tr>
                <tr class="entry2">Voicemail, staff telephones</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
          <tr>
            <td>
              <table class="entry-container">
                <tr class="entry1">Wi-Fi</tr>
                <tr class="entry2">eduroam</tr>
              </table>            
            </td>
            <td><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/></td>
          </tr>
        </table>
      </div>
      <div id="footer">
        <div id="good"><img src={checkImage} alt="check" style={{ width: '20px', height: '20px' }}/> Good Service</div>
        <div id="partial"><img src={warning} alt="check" style={{ width: '20px', height: '20px' }}/> Partial Service</div>
        <div id="none"><img src={none} alt="check" style={{ width: '20px', height: '20px' }}/> No Service</div>
      </div>
    </div>
  );
}

export default ServiceStatus;
