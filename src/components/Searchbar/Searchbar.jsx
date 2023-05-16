import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, Form, Input, Button } from './styled';
import { ImSearch } from 'react-icons/im';

/* Компонент приймає один проп onSubmit – функцію для передачі
значення інпута під час сабміту форми */

const PLACEHOLDER = 'Search images and photos';
const QUERY_EMPTY_ERR = 'Your query is empty!';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      state,
      props: { onSubmit },
    } = this;

    const value = state.value.trim();

    if (value === '') {
      toast.error(QUERY_EMPTY_ERR);
      return;
    }

    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch size="28" />
          </Button>
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={PLACEHOLDER}
          />
        </Form>
      </Header>
    );
  }
}
