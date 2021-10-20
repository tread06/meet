import React, { Component } from 'react';

class CitySearch extends Component {
  //shorthand for using the constructor to initialize state
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    //filter using value
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {/* Render suggestions. */}
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => {
                this.handleItemClicked(suggestion);
              }}
            >
              {suggestion}
            </li>
          ))}
          {/* Render all cites list item. */}
          <li key="all" onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
