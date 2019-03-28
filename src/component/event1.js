import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/events.css';
import './styles/bootstrap4/bootstrap.min.css';
import './images/event1.jpg';

class App extends Component {
  render() {
    return (
        <div>
        <div className="home_content_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content d-flex flex-row align-items-end justify-content-start">
                  <div className="current_page">Events</div>
                  <div className="breadcrumbs ml-auto">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li>Events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Events */}
        <div className="events">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Event */}
                <div className="event">
                  <div className="row row-lg-eq-height">
                    <div className="col-lg-6 event_col">
                      <div className="event_image_container">
                        <div className="background_image" style={{backgroundImage: 'url(images/event_9.jpg)'}} />
                        <div className="date_container">
                          <a href="#">
                            <span className="date_content d-flex flex-column align-items-center justify-content-center">
                              <div className="date_day">15</div>
                              <div className="date_month">May</div>
                            </span>
                          </a>	
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 event_col">
                      <div className="event_content">
                        <div className="event_title">Marketing Sollutions in 2018</div>
                        <div className="event_location">@ Miami Auditorium</div>
                        <div className="event_text">
                          <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src="images/event_speaker_1.jpg" alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Michael Smith</div>
                              <div className="event_speaker_title">Marketing Specialist</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src="images/event_speaker_2.jpg" alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Jessica Williams</div>
                              <div className="event_speaker_title">Marketing Specialist</div>
                            </div>
                          </div>
                        </div>
                        <div className="event_buttons">
                          <div className="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div>
                          <div className="button_2 event_button event_button_2"><a href="#">Read more</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></div></div>
    );
  }
}

export default App;
