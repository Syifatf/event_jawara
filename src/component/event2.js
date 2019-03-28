import React, { Component } from 'react';
import './styles/events.css';
import './styles/bootstrap4/bootstrap.min.css';
import event_speaker1 from './images/event_speaker_1.jpg';
import event_speaker2 from './images/event_speaker_2.jpg';

class Event2 extends Component {
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
                        <div className="event_location">@  Hall B Jakarta Convention Center</div>
                        <div className="event_text">
                          <p>19th Indonesia AgroFood Expo 2019 adalah pameran tentang produk tanaman pangan, hortikultura, perkebunan, peternakan, perikanan, makanan olahan dan teknologi pertanian. Kegiatan tersebut diselenggarakan dengan tujuan antara lain sebagai sarana promosi produk dan potensi investasi agribisnis / agroindustri untuk pasar domestik dan internasional.

                          Pameran Indonesia Agrofood Expo 2018 diselenggarakan setiap tahun sejak tahun 2001 atas dukungan Kementerian Pertanian RI.

                          Indonesia AgroFood Expo 2019 yang ke-19 akan dilaksanakan di Jakarta Convention Center pada tanggal 27 – 30 Juni 2019. Pameran tersebut diselenggarakan bersamaan dengan Indonesia International Modern Agriculture Expo 2019 dan Indonesia Coffee, Cacao & Tea Festival 2019.

                          Selama pameran selain display produk unggulan, teknologi, alat dan mesin serta jasa pendukung lainnya, juga akan diadakan kegiatan pendukung antara lain talkshow dan presentasi peluang investasi sektor pertanian, business matching (buyers meet sellers), launching product, festival kopi, kakao & teh, dll.</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Indonesia Coffee</div>
                              <div className="event_speaker_title">Materi dan Produk Baku Pertanian</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker2} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">directur pertanian</div>
                              <div className="event_speaker_title">Materi dan Produk Baku Pertanian & Peningkatan Pengawasan Distribusi Pangan untuk Stabilisasi Harga</div>
                            </div>
                          </div>
                        </div>
                        <div className="event_buttons">
                          {/* <div className="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div> */}
                          {/* <div className="button_2 event_button event_button_2"><a href="#">Read more</a></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></div></div>
    );
  }
}

export default Event2;
