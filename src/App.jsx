import "./styles/components/app.sass"

function App() {
  return <section className="container">
    <div className="top-side">

      <div className="title">
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services. </p>
      </div>

      <div className="rating">
        <span>Rated 5 Stars in Reviews </span>
        <span>Rated 5 Stars in Report Guru </span>
        <span>Rated 5 Stars in BestTech</span>
      </div>

    </div>

    <div className="bottom-side">

      <span>
        <h2>Colton Smith</h2>
        <p>Verified Buyer</p>
        <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>  
      </span>

      <span>
        <h2>Irene Roberts</h2>
        <p>Verified Buyer</p>
        <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>  
      </span>

      <span>
        <h2>Anne Wallace</h2>
        <p>Verified Buyer</p>
        <p>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>  
      </span>
      
    </div>

  </section>
      
}

export default App
