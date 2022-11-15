import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;

    return (
      <input
        className={className}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type="search"
      />
    );
  }
}

export default SearchBox;
