/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Table } from "reactstrap";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  render() {
    return (
      <Table responsive style={{ fontSize: 15 }}>
        <tbody>
          <tr>
            <td>
              <img
                src={require("../assets/img/projects/pet-adoption.png")}
                alt=""
              />
            </td>
            <td> | </td>
            <td>
              <h3>
                Evcil Hayvan Sahiplendirme Projesi (React + Spring Boot + MySQL
                + Hibernate)
              </h3>
              <p>
                2 arkadaşımla birlikte Bitirme projesi için geliştirdiğimiz bir
                platform. Hem kullanıcıların hem de barınakların bir çatı
                altında buluştuğu bir platform yapmaktı amacımız. Bu doğrultuda
                geliştirmelerimizi yaptık. Ayrıca "Bilgisayarlı Görü"
                tekniğinden yararlanarak kullandığımız model sayesinde
                platformumuza "Resimden tür belirleme" özelliğini eklemiş olduk.
                Şuan için site bakımlarımız, hata düzeltmelerimiz devam etmekte.
                Ama son kullanıcının erişebilmesi için server'a yükledik. Şu
                adresten inceleyebilirsiniz:
                <br />
                <a
                  href="http://pet-adoption.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pet Adoption
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={require("../assets/img/projects/pet-adoption.png")}
                alt=""
              />
            </td>
            <td> | </td>
            <td>
              <h3>
                Evcil Hayvan Sahiplendirme - Mobil Uygulama Projesi (React
                Native(Expo) + Spring Boot + MySQL + Hibernate)
              </h3>
              <p>
                2 arkadaşımla birlikte Bitirme projesi için geliştirdiğimiz
                Evcil Hayvan Sahiplendirme projesinin mobil uygulaması. Web
                sitemizi kullanan kullanıcılar ve barınaklara daha iyi bir
                deneyim sunabilmek için mobil platformlara da bir uygulama
                geliştiriyoruz. Bu projede aslında bize çok yeni bir teknoloji
                olan "React Native"i kullanıyoruz. Kullandığımız hazır UI Kit'i
                sebebiyle "expo" ile hem Android'e hem de IOS'a aynı anda
                geliştirme yapabiliyoruz. Şuan için emekleme aşamasındayız ama
                web sitesindeki özellikleri mobil tarafa aktarma çalışmalarımız
                devam ediyor.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={require("../assets/img/projects/humbo.png")} alt="" />
            </td>
            <td> | </td>
            <td>
              <h3>
                Elektronik Ticaret Sitesi Projesi ( React + Spring Boot +
                Postgresql + Hibernate )
              </h3>
              <p>
                Üniversite 3. sınıfta, 5 kişilik bir arkadaş grubuyla amatör de
                olsa bir "Elektronik Ticaret Sitesi" kurduk. Tam bir Yazılım
                Mühendisliği gibi çalıştığımız bu proje'de "Yazılım Mimarı"
                olarak görev aldım. Ve 3 arkadaş ile birlikte sitenin ön yüzünü
                geliştirmek adına React ile uğraştım.
                <br />
                <a
                  href="https://github.com/BeratKARATAS53/OnlineShopping-BBM384"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={require("../assets/img/projects/hotel-reservation.png")}
                alt=""
              />
            </td>
            <td> | </td>
            <td>
              <h3>Hotel Reservation Web Application (PHP + MySQL)</h3>
              <p>
                Veritabanı Sistemleri dersinin projesi olarak 2 arkadaşımla
                birlikte geliştirdiğimiz bir sistemdi. Otel ve kullanıcıların
                bulunduğu bir sistemde, oteller oda ve organizasyon işlemlerini
                yapabilirken kullanıcılarda rezervasyon işlemlerini
                halledebilecekleri basit bir yapıya sahipti.
                <br />
                <a
                  href="https://github.com/BeratKARATAS53/Hotel-Reservation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={require("../assets/img/projects/movie-tracker.png")}
                alt=""
              />
            </td>
            <td> | </td>
            <td>
              <h3>
                Film Takip Sitesi Projesi ( React + Spring Boot + MySQL +
                Hibernate )
              </h3>
              <p>
                2. stajımı gerçekleştirdiğim OBSS firmasında basit bir film
                izleme sitesi yapmaya çalıştım. Bu proje sayesinde React ve
                Spring'in yanı sıra MySQL'de kullanarak veri tabanıyla ilişki
                kurmayı da kavramış oldum.
                <br />
                Github:{" "}
                <a
                  href="https://github.com/BeratKARATAS53/Movie-Tracker-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend
                </a>
                ,
                <a
                  href="https://github.com/BeratKARATAS53/Movie-Tracker-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Backend
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={require("../assets/img/projects/vodafone.png")}
                alt=""
              />
            </td>
            <td> | </td>
            <td>
              <h3>
                Vodafone Sistem Yönetim Paneli ( Angular + Spring Boot + MySQL +
                Hibernate )
              </h3>
              <p>
                3. stajımı gerçekleştirdiğim İnnova firmasında hali hazırda
                yürütülmekte olan bu projeye dahil oldum. Angular'ı yeni
                öğreniyor olduğumdan öğrendiklerimi uygulamak adına bu projeyi
                baz alarak geliştirmelerde bulundum. Yaptıklarım projeye
                eklenmedi ama Angular'da tecrübe kazanmama fazlasıyla yardımı
                oldu.
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Projects;
