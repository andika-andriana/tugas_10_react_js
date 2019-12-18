import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Header,
  Container,
  Flag,
  Icon,
  Input,
  Image,
  Menu,
  Divider,
  Label,
  Button
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <Container>
        <Menu secondary>
          <Menu.Item>
            <Flag name="id" size="large" />
            <Menu.Item>
              <Icon name="angle left" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="angle right" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Input
                fluid
                placeholder="Search..."
                icon={<Icon name="star" />}
                size="large"
                style={{ width: 800 }}
              />
            </Menu.Item>
            <Menu.Menu>
              <Menu.Item>
                <Header>
                  <Image
                    circular
                    src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                  />
                  Patrick
                </Header>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Container>
      <Divider horizontal>
        <h3>SELAMAT DATANG!!!!</h3>
      </Divider>
      <Container textAlign="right">
        <Label as="h3" color="teal" tag position="right">
          SPORT
        </Label>
      </Container>
      <Container textAlign="center">
        <Divider hidden />
        <p style={{ fontSize: 14 }}>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen
          aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan
          melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)? Suzuki, Honda,
          KTM, dan Aprilia memprotes penggunaan komponen aero di motor
          Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama
          MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso
          tampil sebagai pemenang usai mengalahkan Marc Marquez. Keempat tim
          meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan
          downforce, yang membantu motor melesat di trek. Sementara Ducati
          bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah
          disetujui Technical Director sebelum balapan. Pada awalnya, protes
          keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke
          Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri
          kedua di Argentina digelar pada 29-31 Maret mendatang. Manajer umum
          Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen
          itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati
          akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam
          federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus
          pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini
          Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada
          MotoGP.com. "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami
          sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami
          tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan
          secara berbeda."
        </p>
        <Button icon labelPosition="left" color="teal">
          <Icon name="plus" />
          Tambah Ke Dalam List
        </Button>
      </Container>
    </div>
  );
}

export default App;
