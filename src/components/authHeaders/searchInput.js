import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    const { containerStyle, inputStyle } = this.props;
    return (
      <form id="search-input-form" className={containerStyle}>
        <input
          className={inputStyle}
          id="contestant-searchinput"
          type="search"
          name="search"
          placeholder="Search for contestant"
        />
        <i className="fas fa-search search-icon" />
      </form>
    );
  }
}

export default SearchInput;
