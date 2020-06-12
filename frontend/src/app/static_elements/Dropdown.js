import React, { Component } from 'react';
import PropTypes from "prop-types";

class Dropdown extends Component {

  componentDidMount() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    window.M.Dropdown.init(elems, {});
  }

  handleItemSelection(item, event) {
    event.preventDefault();

    this.props.handleElementSelection(item.value);
  }

  render() {
    return (
      <div>
        <a className="dropdown-trigger btn col s12 grey darken-4" href="!#" data-target="dropdown1">{this.props.text}</a>

        <ul id="dropdown1" className="dropdown-content">
          {this.props.items.map((item, i) => <li key={i}><a href="#!" className="black-text" onClick={this.handleItemSelection.bind(this, item)}>{item.text}</a></li>)}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  handleElementSelection: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
