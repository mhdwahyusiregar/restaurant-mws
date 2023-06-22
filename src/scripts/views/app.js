import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ hamburger, drawer, content }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      if (page) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        // Tampilkan informasi atau arahkan ke halaman utama jika route tidak terdaftar
        this._content.innerHTML = '<h3>Halaman tidak ditemukan.</h3>';
      }
    } catch (error) {
      // Tampilkan informasi atau arahkan ke halaman utama jika terjadi kesalahan
      this._content.innerHTML = '<h3>Terjadi kesalahan saat memuat halaman.</h3>';
    }
  }
}

export default App;
