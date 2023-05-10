import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Span, Input } from './styled';
//TODO: import {ImSearch } from 'react-icons/im';
//TODO: import { ReactComponents as MyIcon } from './some.svg';

/* Компонент приймає один проп onSubmit – функцію для передачі
значення інпута під час сабміту форми */

export class Searchbar extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: ''
  };

  handleQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.setState.query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <Header>
        <Form>
          <Button type="submit" onSubmit={this.handleQueryChange}>
            <Span>Search</Span>
          </Button>
          <Input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

/* Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
 */
