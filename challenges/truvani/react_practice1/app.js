class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="mini-navbar">
          <div>11,786 Verified Reveiews</div>
          <div>30 Day Money Back Guarantee</div>
          <div>Free Shipping on US Orders OVer $99</div>
          <div>866 - TRUVANI (878-8264)</div>
        </div>

        <div className="navbar">
          <div>Logo</div>
          <div>Products</div>
          <div>Story</div>
          <div>Reviews</div>
          <div>Recipes</div>
          <div>Contact</div>
          <div>Tastemaker</div>
          <div>Sign In</div>
          <div>Cart</div>
        </div>

      </React.Fragment>
    )
  }
}

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">

        <div className="jumboLanguage">

          <div className="jumboSubHeader">
            Immune Support - Back in Stock
          </div>

          <div className="jumboMainHeader">
            <strong>This assorment of healt supplements can help you <br /> support your immune system</strong>
          </div>

          <p>
            We sold out. But now our Vitamin C and Immune Support supplements are <b>back in</b>
            <br />
            <b>stock</b>. And you can <b>save up to 25% off </b>the retail price. While supplies last.
          </p>

          <a className="jumboButton"> Learn More </a>

        </div>

        <div className="jumboImg">
          <div>Product 1</div>
          <div>Product 2</div>
          <div>Product 3</div>
          <div>Product 4</div>
        </div>

      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
      </React.Fragment>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
