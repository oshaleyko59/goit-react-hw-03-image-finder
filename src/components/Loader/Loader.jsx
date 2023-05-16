import PropTypes from "prop-types";
import { Vortex } from 'react-loader-spinner';

/*
Компонент спінера відображається, доки відбувається
завантаження зображень. Використовуйте будь-який готовий компонент,
наприклад react-loader-spinner або будь-який інший.
 */

export const Loader = ({query}) => (
  <>
  <Vortex
    visible={true}
    height="40"
    width="40"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['yellow', 'blue', 'yellow', 'blue', 'blue', 'yellow']}
    />
    <p>`Loading images for "${query}"...`</p>
  </>
);

Loader.propTypes = {
  query: PropTypes.string.isRequired,
}
