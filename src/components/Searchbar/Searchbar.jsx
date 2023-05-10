import PropTypes from 'prop-types';
import { Header, Form, Button, Span, Input } from './styled';

/* Компонент приймає один проп onSubmit – функцію для передачі
значення інпута під час сабміту форми */

export const Searchbar = ({ onSubmit }) => (
  <Header>
    <Form>
      <Button type="submit" onSubmit={onSubmit}>
        <Span>Search</Span>
      </Button>
      <Input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </Form>
  </Header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}
