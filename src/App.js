import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/events.css';
import './styles/bootstrap4/bootstrap.min.css';
import event_speaker1 from './images/event_speaker_1.jpg';
import event_speaker2 from './images/event_speaker_2.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="super_container">
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
                        <div className="background_image" style={{backgroundImage: 'url(https://resizepic.com/resizedimage.php?file=690x590-2fe44217e538df53c2f4ed653e055100.jpg&format=jpg)'}} />
                        <div className="date_container">
                          <a href="#">
                            <span className="date_content d-flex flex-column align-items-center justify-content-center">
                              <div className="date_day">28-30</div>
                              <div className="date_month">Maret</div>
                            </span>
                          </a>	
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 event_col">
                      <div className="event_content">
                        <div className="event_title">Indo Agri Expo 2019</div>
                        <div className="event_location">@  JIExpo Kemayoran, Jakarta</div>
                        <div className="event_text">
                          <p>Pameran pertanian yang unik ini adalah acara teknologi pertanian terbesar di Indonesia yang menyatukan sebuah kongregasi internasional perusahaan pertanian dan juga industri pendukungnya yang berkumpul di jantung industri pertanian di Surabaya, Indonesia untuk memamerkan perkembangan terbaru dalam industri pertanian besar-besaran di Indonesia..</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Michael Smith</div>
                              <div className="event_speaker_title">Materi dan Produk Baku Pertanian</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker2} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Jessica Williams</div>
                              <div className="event_speaker_title">Hortikultur dan Tanaman</div>
                            </div>
                          </div>
                        </div>
                        <div className="event_buttons">
                          {/* <div className="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div> */}
                          <div className="button_2 event_button event_button_2"><a href="./component/event1.js">Read more</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event */}
                <div className="event">
                  <div className="row row-lg-eq-height">
                    <div className="col-lg-6 event_col">
                      <div className="event_image_container">
                        <div className="background_image" style={{backgroundImage: 'url(https://resizepic.com/resizedimage.php?file=690x590-2b82eb600f6cf2261b946201841b94c8.jpg&format=jpg)'}} />
                        <div className="date_container">
                          <a href="#">
                            <span className="date_content d-flex flex-column align-items-center justify-content-center">
                              <div className="date_day">27-30</div>
                              <div className="date_month">Juni</div>
                            </span>
                          </a>	
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 event_col">
                      <div className="event_content">
                        <div className="event_title">19th Indonesia Agro Food Expo 2019</div>
                        <div className="event_location">@ Hall B Jakarta Convention Center</div>
                        <div className="event_text">
                          <p>19th Indonesia AgroFood Expo 2019 adalah pameran tentang produk tanaman pangan, hortikultura, perkebunan, peternakan, perikanan, makanan olahan dan teknologi pertanian. Kegiatan tersebut diselenggarakan dengan tujuan antara lain sebagai sarana promosi produk dan potensi investasi agribisnis / agroindustri untuk pasar domestik dan internasional..</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Directur pertanian</div>
                              <div className="event_speaker_title">Materi dan Produk Baku Pertanian & Peningkatan Pengawasan Distribusi Pangan untuk Stabilisasi Harga</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker2} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Jessica Williams</div>
                              <div className="event_speaker_title">talkshow dan presentasi peluang investasi sektor pertanian</div>
                            </div>
                          </div>
                        </div>

                        <div className="event_buttons">
                          {/* <div className="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div> */}
                          <div className="button_2 event_button event_button_2"><a href="./component/event2.js">Read more</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event */}
                <div className="event">
                  <div className="row row-lg-eq-height">
                    <div className="col-lg-6 event_col">
                      <div className="event_image_container">
                        <div className="background_image" style={{backgroundImage: 'url(http://dkp.indramayukab.go.id/wp-content/uploads/2019/01/WhatsApp-Image-2019-01-14-at-17.16.17-768x432.jpeg)'}} />
                        <div className="date_container">
                          <a href="#">
                            <span className="date_content d-flex flex-column align-items-center justify-content-center">
                              <div className="date_day">30</div>
                              <div className="date_month">Maret</div>
                            </span>
                          </a>	
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 event_col">
                      <div className="event_content">
                        <div className="event_title">Rakernas Pembangunan Pertanian Tahun 2019</div>
                        <div className="event_location">@ Hotel Grand Bidakara Pancoran, Jakarta Selatan</div>
                        <div className="event_text">
                          <p>Dalam rangka evaluasi capaian 4 tahun pembangunan pertanian dan persiapan perencanaan pembangunan pertanian ke depan, Badan Ketahanan Pangan (BKP) Kementerian Pertanian Pusat melaksanakan Rakernas Pembangunan Pertanian Tahun 2019.</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name"> Komjen Polisi Drs. Arif Sulistyanto, M.Si.</div>
                              <div className="event_speaker_title">Peningkatan Pengawasan Distribusi Pangan untuk Stabilisasi Harga</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Direktur Bisnis Kecil dan Jaringan BNI, Bp. Catur Budi Harto.
                              <div className="event_speaker_title">Pembangunan Korporasi Petani</div>
                            </div>
                          </div>
                        </div>
                        <div className="event_buttons">
                          {/* <div className="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div> */}
                          <div className="button_2 event_button event_button_2"><a href="./component/event3.js">Read more</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> <br/>
            <div className="row">
              <div className="col">
                <div className="pagination"><br/>
                  {/* <ul>
                    <li className="active"><a href="#">01.</a></li>
                    <li><a href="#">02.</a></li>
                    <li><a href="#">03.</a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>      
        </div>
    );
  }
}

export default App;
