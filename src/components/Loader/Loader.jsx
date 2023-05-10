import PropTypes from "prop-types";
import { Vortex } from 'react-loader-spinner';

/*
Компонент спінера відображається, доки відбувається
завантаження зображень. Використовуйте будь-який готовий компонент,
наприклад react-loader-spinner або будь-який інший.
 */

export const Loader = ({isVisible}) => (
  <Vortex
    visible={isVisible}
    height="40"
    width="40"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['yellow', 'blue', 'yellow', 'blue', 'blue', 'yellow']}
  />
);

Loader.propTypes = {
  isVisible: PropTypes.bool,
}
