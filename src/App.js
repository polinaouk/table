import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      products: [
        {
          artnumber: "0001",
          name: "Кастрюля",
          brand: "Tefal",
          weight: 1200,
          quantity: 1,
          price: 1700,
          stock: 1
        },
        {
          artnumber: "0002",
          name: "Сковорода",
          brand: "КМЗ",
          weight: 1900,
          quantity: 1,
          price: 950,
          stock: 1
        },
        {
          artnumber: "0003",
          name: "Ложка нерж.",
          brand: "Tescoma",
          weight: 95,
          quantity: 12,
          price: 1200,
          stock: 0
        },
        {
          artnumber: "0004",
          name: "Спички",
          brand: "Красный коммунар",
          weight: 15,
          quantity: 20,
          price: 1,
          stock: 1
        },
        {
          artnumber: "0005",
          name: "Table",
          brand: "Tefal",
          weight: 1200,
          quantity: 1,
          price: 1700,
          stock: 1
        },
        {
          artnumber: "0006",
          name: "Phone",
          brand: "КМЗ",
          weight: 1900,
          quantity: 1,
          price: 950,
          stock: 1
        },
        {
          artnumber: "0007",
          name: "Spoon",
          brand: "Tescoma",
          weight: 95,
          quantity: 6,
          price: 1200,
          stock: 0
        },
        {
          artnumber: "0008",
          name: "Table",
          brand: "Красный коммунар",
          weight: 15,
          quantity: 2,
          price: 1,
          stock: 1
        },
        {
          artnumber: "0009",
          name: "Knife",
          brand: "Tescoma",
          weight: 95,
          quantity: 10,
          price: 1200,
          stock: 0
        },
        {
          artnumber: "0010",
          name: "Screen",
          brand: "Красный коммунар",
          weight: 15,
          quantity: 20,
          price: 1,
          stock: 1
        }
      ]
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("products");
      const products = json;

      if (products) {
        this.setState(() => ({ products }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  renderTableData() {
    return this.state.products.map((product, index) => {
      const {
        artnumber,
        name,
        brand,
        weight,
        quantity,
        price,
        stock
      } = product; //destructuring
      return (
        <tr key={artnumber}>
          <td>{artnumber}</td>
          <td>{name}</td>
          <td>{brand}</td>
          <td>{weight}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{stock}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.products[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Cool store</h1>
        <table id="products">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
