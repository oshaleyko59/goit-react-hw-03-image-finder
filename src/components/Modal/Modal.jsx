import PropTypes from "prop-types";
import { Overlay, Div } from './styled';
/*
Під час кліку на елемент галереї повинно відкриватися
модальне вікно з темним оверлеєм і відображатися велика
 версія зображення.
 Модальне вікно повинно закриватися по натисканню клавіші
 ESC або по кліку на оверлеї.

Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна,
тільки замість білого модального вікна рендериться зображення
(у прикладі натисніть Run). Анімацію робити не потрібно!

<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
*/

export const Modal = ({ src, alt }) => {
  return (
    <Overlay>
      <Div>
        <img src={src} alt={alt} />
      </Div>
    </Overlay>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
