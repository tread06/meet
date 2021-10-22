import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    let componentRoot = document.querySelector('.suggestions');
    if (!componentRoot.contains(e.target)) {
      this.setState({
        showSuggestions: false,
      });
      return;
    }
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
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <p>City Search</p>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
          placeholder="Search cities"
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
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
          <li key="all" onClick={() => this.handleItemClicked('all')}>
            See all cities
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
