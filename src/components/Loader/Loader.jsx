import { Vortex } from 'react-loader-spinner';

/*
Компонент спінера відображається, доки відбувається
завантаження зображень. Використовуйте будь-який готовий компонент,
наприклад react-loader-spinner або будь-який інший.
 */

export const Loader = () => (
  <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
    wrapperClass="vortex-wrapper"
    colors={['yellow', 'blue', 'yellow', 'blue', 'blue', 'yellow']}
  />
);

