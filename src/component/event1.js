import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/events.css';
import './styles/bootstrap4/bootstrap.min.css';
import event_speaker1 from './images/event_speaker_1.jpg';
import event_speaker2 from './images/event_speaker_2.jpg';

class Event1 extends Component {
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
                          <p>Pameran pertanian yang unik ini adalah acara teknologi pertanian terbesar di Indonesia yang menyatukan sebuah kongregasi internasional perusahaan pertanian dan juga industri pendukungnya yang berkumpul di jantung industri pertanian di Surabaya, Indonesia untuk memamerkan perkembangan terbaru dalam industri pertanian besar-besaran di Indonesia.

                        8 Fokus Pertunjukan:

                        MESIN PERALATAN LIVESTOCK
                        Hewan yang ambil bagian dalam Kompetisi Pertanian Umum: Sapi, Domba, Babi, Kambing, Kuda, Keledai. Hewan yang disajikan: hewan peternakan.
                        MESIN PERLENGKAPAN PERIKANAN
                        Perikanan disajikan: ikan air tawar dan air asin, kerang, kerang, kerang, kerang, udang, kepiting, lobster, cumi-cumi, gurita, rumput laut, teripang
                        SEKTOR TANAMAN DAN RENCANA, TAMAN, TAMAN SAYURAN, LINGKUNGAN DAN ALAM
                        Sejumlah area penjualan: Perumahan berkelanjutan, berkebun, kebun sayur, dll.
                        MESIN & PERALATAN
                        Teknik modern dan permesinan baru telah menggeser industri pertanian ke efisiensi dan produksi massal. Peningkatan efisiensi ini berarti bahwa dunia memiliki akses ke makanan apa pun yang diinginkannya kapan saja.
                        LAYANAN DAN PROFESI PERTANIAN
                        Beberapa peserta pameran: Ketenagakerjaan dan Pelatihan, Penelitian (INRA, CIRAD, dll.), Serikat Buruh, Bank, Lembaga.
                        MESIN PENGOLAHAN PERTANIAN & PERALATAN
                        Sektor Makanan dan Pertanian terdiri dari sistem aset individu yang sangat tergantung satu sama lain.
                        MATERI & PRODUK BAKU PERTANIAN
                        Produk berkualitas baik membutuhkan bahan-bahan berkualitas baik. Varietas buah dan sayuran diarahkan ke pasar produk segar.
                        HORTIKULTUR & TAMAN
                        Hortikultura adalah tentang menggunakan pengetahuan sains ahli Anda untuk mengoptimalkan produksi tanaman dengan cara yang paling hemat biaya.
                        Info dan kontak:

                        Facebook: Indo Agri Expo
                        Instagram: @indoagriexpo
                        Situs web: indoagriexpo.com</p>
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

export default Event1;
