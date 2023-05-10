import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Span, Input } from './styled';
//TODO: import {ImSearch } from 'react-icons/im';
//TODO: import { ReactComponents as MyIcon } from './some.svg';

/* Компонент приймає один проп onSubmit – функцію для передачі
значення інпута під час сабміту форми */

export class Searchbar extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: ''
  };

  handleChange = (e) => {
//console.log('change Searchbar:', this.state, this.props);
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = e => {
    console.log('submit Searchbar:', this.state, this.props);
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    console.log('render Searchbar:', this.state,this.props);
    return (
      <Header>
        <Form>
          <Button type="submit" onSubmit={this.handleSubmit}>
            <Span>Search</Span>
          </Button>
          <Input
            type="text"

            value={this.state.value}
            onChange={this.handleChange}

            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

/*          name="query"
            autocomplete="off"
            autoFocus

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
 */
