import React, { Component } from "react";
import "./App.css";

const data = [
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
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      selectValue: "All",
      perPage: 4,
      currentPage: 1,
      products: data
    };
  }

  renderTableData(values) {
    return values.map(product => {
      const {
        artnumber,
        name,
        brand,
        weight,
        quantity,
        price,
        stock
      } = product;
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

  removeDublicates() {
    const productList = Object.keys(
      data.reduce((acc, el, index) => {
        acc[el.brand] = index;
        return acc;
      }, {})
    );
    return productList.map(product => (
      <option key={product} value={product}>
        {product}
      </option>
    ));
  }

  handleFilterChange(value) {
    let newProducts;

    if (value === "All") {
      newProducts = data;
    } else {
      newProducts = data.filter(({ brand }) => value === brand);
    }

    this.setState({ selectValue: value, products: newProducts });
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  renderPagesButtons(pagesCount) {
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages.map(el => (
      <button
        onClick={() => this.handlePageChange(el)}
        disabled={el === this.state.currentPage}
      >
        {el}
      </button>
    ));
  }

  render() {
    const { perPage, currentPage, products, selectValue } = this.state;

    const pagesCount = Math.ceil(products.length / perPage);

    const currentVisible = products.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );

    return (
      <div>
        <h1 id="title">Cool store</h1>
        <div id="wrapper">
          <div id="table">
          <div id="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => this.handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
              {this.renderPagesButtons(pagesCount)}
              <button
                disabled={currentPage === pagesCount}
                onClick={() => this.handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
            <table id="products">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData(currentVisible)}
              </tbody>
            </table>
            
          </div>
          <div id="filters">
            <select
              value={selectValue}
              onChange={e => this.handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              {this.removeDublicates()}
            </select>
            <button onClick={() => this.handleFilterChange("All")}>
              clear
            </button>
            <h4>{`Overall products: ${products.length}`}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
