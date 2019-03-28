import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/events.css';
import './styles/bootstrap4/bootstrap.min.css';
import event_speaker1 from './images/event_speaker_1.jpg';
import event_speaker2 from './images/event_speaker_2.jpg';

class Event3 extends Component {
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
                        <div className="event_location">@  Hotel Grand Bidakara Pancoran, Jakarta Selatan</div>
                        <div className="event_text">
                        <p>Dalam rangka evaluasi capaian 4 tahun pembangunan pertanian dan persiapan perencanaan pembangunan pertanian ke depan, Badan Ketahanan Pangan (BKP) Kementerian Pertanian Pusat melaksanakan Rakernas Pembangunan Pertanian Tahun 2019.</p>
                        <p>Acara Rakernas dibuka oleh Menteri Pertanian, Dr.,Ir., Andi Amran Sulaiman, MP. Peserta rapat dihadiri oleh Gubernur, Bupati, Kepala Dinas yang menangani pertanian dan ketahanan pangan Kabupaten/Kota seluruh Indonesia. Pada kesempatan tersebut, Amran menghimbau kepada seluruh peserta rapat agar mempersiapkan dan merencanakan pembangunan pertanian untuk ke depannya.

                        Berikut point pembahasan agenda Rakernas Tahun ini adalah, sebagai berikut :

                        Laporan Pelaksanaan Rakernas : Kepala Biro Perencanaan pada BKP Kementerian Pertanian.
                        Pembukaan dan Pengarahan : Menteri Pertanian, dr. Ir. Andi Amran Sulaiman, M.P.
                        Dukungan Komisi IV dalam Percepatan Peningkatan Daya Saing SDM Pertanian untuk Peningkatan Ekspor Pangan dan Pertanian : Ketua Komisi IV DPR RI : Edhy Prabowo, M.M., MBA.
                        Integrasi Dana Desa untuk Pencapaian Percepatan Industri dan Ekspor Pangan dan Pertanian : Menteri Desa, Pembangunan Daerah Tertinggal dan Transmigrasi : Eko Putro Sandjoyo, BSEE, MBA.
                        Pembangunan Korporasi Petani, Direktur Bisnis Kecil dan Jaringan BNI, Bp. Catur Budi Harto.
                        Dukungan Perum BULOG dalam menjaga Stabilisasi Harga Pangan, Direktur Pengadaan Perum BuLOG : Mayjen TNI (Purn) dr. Bachtiar, SIP., MAP.
                        Peningkatan Pengawasan Distribusi Pangan untuk Stabilisasi Harga, Kabareskrim : Komjen Polisi Drs. Arif Sulistyanto, M.Si.
                        Pendampingan TNI AD mendukung Pencapaian Swasembada Pangan, Assisten Teritorial Kepala Staf Angkatan Darat : Mayjen TNI Supartodi, S.E., M.Si.
                        Pencegahan Korupsi untuk Peningkatan Akuntabilitas Kinerja Pembangunan Pertanian, Direktur Litbang KPK, Dr. Wawan Wardiana.</p>
                        <p>Acara dilanjut dengan diskusi panel, dan berikut materi serta narasumber pada diskusi panel tersebut :

                        Pengembangan Program #SERASI 2019, Dirjen Tanaman Pangan : Dr. Ir. Gatot Irianto, M.S.
                        Pelaksanaan Program #BEKERJA 2019, Dirjen Peternakan dan Keswan : Dr. drh. I Ketut Diarmita, M.P.
                        Pelaksanaan Program Petani Milenial 2019, Kepala Badan PPSDM Pertanian : Dr. Ir. Momon Rusmono, M.S.
                        Penjabaran kegiatan pencegahan KPK di Kementerian Pertanian :
                        1) Kajian Pengelolaan Pupuk Bersubsidi;
                        2) Komoditas Tataniaga, Komoditas Daging/Sapi;
                        3) Kajian Pengelolaan Raskin;
                        4) Kajian Alih Fungsi Lahan – LP2B;
                        5) Kajian Tata Niaga Importasi Komoditas Pangan Strategis;
                        6) Kajian Tata Niaga Importasi Gula Rafinasi;
                        7) Kajian Sistem Pengelolaan Komoditas Kelapa Sawit;
                        8) Kajian Subsidi Pertanian (Pupuk, Benih, KUR, dan Asuransi Usaha Padi);
                        9)Kajian Tatakelola Kebijakan Swasembada Komoditas Pangan Strategis (Kedelai, Tebu/Gula, Bawang Putih).
                        Selanjutnya, acara dilanjut melaksanakan pembahasan rencana untuk Petani Milenial (PM)</p>
                        </div>
                        <div className="event_speakers">
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker1} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Komjen Polisi Drs. Arif Sulistyanto, M.Si.</div>
                              <div className="event_speaker_title">Peningkatan Pengawasan Distribusi Pangan untuk Stabilisasi Harga</div>
                            </div>
                          </div>
                          {/* Event Speaker */}
                          <div className="event_speaker d-flex flex-row align-items-center justify-content-start">
                            <div><div className="event_speaker_image"><img src={event_speaker2} alt /></div></div>
                            <div className="event_speaker_content">
                              <div className="event_speaker_name">Direktur Bisnis Kecil dan Jaringan BNI, Bp. Catur Budi Harto.</div>
                              <div className="event_speaker_title">Pembangunan Korporasi Petani</div>
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

export default Event3;
