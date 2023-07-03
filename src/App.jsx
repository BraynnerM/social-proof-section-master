import "./styles/components/app.sass"

function App() {
  return <section className="container">
    <div className="top-side">

      <div className="title">
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services. </p>
      </div>

      <div className="rating">
        <div className="rating-box">
          <span className="rating-box-image">
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
          </span>
          <p className="rating-box-text">Rated 5 Stars in Reviews</p>
        </div>
        <div className="rating-box">
          <span className="rating-box-image">
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
          </span>
          <p className="rating-box-text">Rated 5 Stars in Report Guru</p>
        </div>
        <div className="rating-box">
          <span className="rating-box-image">
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
            <img src="./src/assets/icon-star.svg" alt="star" />
          </span>
          <p className="rating-box-text">Rated 5 Stars in BestTech</p>
        </div>
      </div>

    </div>

    <div className="bottom-side">

      <span>
        <div className="user">
          <img src="./src/assets/image-colton.jpg" alt="user-photo" />
          <div>
            <h2>Colton Smith</h2>
            <p className="subname">Verified Buyer</p>
          </div>
        </div>
        <p>" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "</p>
      </span>

      <span>       
        <div className="user">
          <img src="./src/assets/image-irene.jpg" alt="user-photo" />
          <div>
            <h2>Irene Roberts</h2>
            <p className="subname">Verified Buyer</p>
          </div>
        </div>
        <p>" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "</p>
      </span>

      <span>       
        <div className="user">
          <img src="./src/assets/image-anne.jpg" alt="user-photo" />
          <div>
            <h2>Anne Wallace</h2>
            <p className="subname">Verified Buyer</p>
          </div>
        </div>
        <p>" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</p>
      </span>

    </div>

  </section>

}

export default App
