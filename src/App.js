import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'tables',
          price: '25.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'divan.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofa',
          price: '76.99'
        },
        {
          id: 4,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'light',
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
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({

      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) { isInArray = true; }
    });

    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
