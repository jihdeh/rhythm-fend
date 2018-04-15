import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    const { containerStyle, inputStyle } = this.props;
    return (
      <form className={containerStyle}>
        <input
          className={inputStyle}
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
