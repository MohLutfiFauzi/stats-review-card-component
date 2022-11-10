import './App.scss'
import ImgMobile from './assets/image-header-mobile.jpg'
import ImgDesktop from './assets/image-header-desktop.jpg'

function App() {

  return (
    <main className="App">
      <section className='preview-card'>
        <picture className='preview-card__container-img'>
          <source media="(min-width: 1024px)" srcset={ImgDesktop} />
          <img className='preview-card__img' src={ImgMobile} alt="a lot of woman talk each others" />
        </picture>
        <div className='container'>
          <h1 className='preview-card__title'>Get <span className='preview-card__title-accent'>insights</span> that help your business grow.</h1>
          <p className='preview-card__desc'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className='preview-card__container-detail'>
            <div className='preview-card__detail-item'>
              <h2 className='preview-card__detail-number'>10k+</h2>
              <p className='preview-card__detail-text'>companies</p>
            </div>
            <div className='preview-card__detail-item'>
              <h2 className='preview-card__detail-number'>314</h2>
              <p className='preview-card__detail-text'>templates</p>
            </div>
            <div className='preview-card__detail-item'>
              <h2 className='preview-card__detail-number'>12M+</h2>
              <p className='preview-card__detail-text'>queries</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
