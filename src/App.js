import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'stol.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '25.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'divan.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '76.99'
        },
        {
          id: 4,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '149'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '149'
        }


      ]

    }
  }
  render() {
    return (
      <div className="wrapper" >
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
