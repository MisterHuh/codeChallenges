class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: {
        title: "",
        body: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };


  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({ items })
      })
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(e.target.name);
    console.log(e.target.value);

  }

  onSubmit(e) {

    e.preventDefault();

    const post = {
      title: this.state.item.title,
      body: this.state.item.body
    };

    const req = {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }

    fetch('https://jsonplaceholder.typicode.com/posts', req)
      .then(res => res.json())
      .then(item => {
        console.log("item is: ", item);
        this.setState({ item })
      })
  };

  render() {

    const postItems = this.state.items.map(item => (
      <div key={item.id} className="postItem">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <hr />
      </div>
    ));

    const { title, body } = this.state.item;


    return (
      <div className="postItemContainer">

        <form onSubmit={this.onSubmit}>
          <h2>Form</h2>

          <div>
            <input name="title" placeholder="title" onChange={this.handleChange} />
            <br />
            <br />
            <input name="body" placeholder="body" onChange={this.handleChange} />
            <br />
            <br />
            <button type="submit">Submit</button>
            <hr />
          </div>
        </form>

        <h2>Posts</h2>
        {postItems}
      </div>
    )
  }
};

ReactDOM.render(
  <Component />,
  document.querySelector("#root")
);
