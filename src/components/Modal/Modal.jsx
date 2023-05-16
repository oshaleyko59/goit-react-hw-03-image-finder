import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Div } from './styled';
/*
По кліку на елемент галереї повинно відкриватися модальне вікно
з темним оверлеєм і відображатися велика  версія зображення.
 Модальне вікно повинно закриватися по ESC або по кліку на оверлеї.

<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
*/

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = evt => {
    if (evt.code === 'Escape') this.props.closeModal();
  };

  onClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <Overlay onClick={this.onClick}>
        <Div>
          <img src={src} alt={alt} />
        </Div>
      </Overlay>,
      modalRoot
    );
  }
}
