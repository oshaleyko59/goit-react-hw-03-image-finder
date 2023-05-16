import { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { ImageGalleryItem, Gallery, Img } from './styled';
//import { toast } from 'react-toastify';
//import galleryApi from 'services/galleryAPI';
import galleryApi from 'services/galleryFetch';

/*
У відповіді від апі приходить масив об'єктів, в яких цікаві:
*id - унікальний ідентифікатор
*webformatURL - посилання на маленьке зображення для списку карток
*largeImageURL - посилання на велике зображення для модального вікна */

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    query: '',
  };

  state = {
    status: STATUS.IDLE, //+ pending, resolved, rejected
    error: null,
    gallery: [],
    page: 1,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;

    if (prevProps.query !== query) {
      //new query
      this.getPictures(1);
      return;
    }

    if (prevState.page !== page) {
      //next page
      this.getPictures(page);
    }
  }

  getPictures(page) {
    const { query } = this.props;
    const gallery  = page === 1 ? [] : this.state.gallery;

    this.setState({ status: STATUS.PENDING, page });

    galleryApi
      .fetchGallery(query, page)
      .then(({hits, totalHits}) => {
        if (!hits.length) {
          return Promise.reject(new Error(`Nothing found for "${query}`));
        }

        this.setState({
          gallery: [...gallery, ...hits],
          totalHits,
          status: STATUS.RESOLVED,
        });
      })
      .catch(error => this.setState({ error, status: STATUS.REJECTED }));
  }

  handleClickItem = ind => {
    const { largeImageURL, tags } = this.state.gallery[ind];
    this.props.onClick({ src: largeImageURL, alt: tags });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  errorView() {
    // toast.error(this.state.error.message); TODO:
    return <h3>{this.state.error.message}"</h3>;
  }

  idleView() {
    return <></>;
  }

  galleryView() {
    const {
      gallery,
      totalHits,
    } = this.state;
    console.log('totalHits, loaded:', totalHits, gallery.length); //TODO:
    return (
      <>
        <Gallery>
          {gallery.map(({ id, webformatURL, tags }, index) => {
            return (
              <ImageGalleryItem
                key={id}
                onClick={() => {
                  this.handleClickItem(index);
                }}
              >
                <Img src={webformatURL} alt={tags} />
              </ImageGalleryItem>
            );
          })}
        </Gallery>
        {gallery.length < totalHits && <Button loadMore={this.loadMore} />}
      </>
    );
  }

  render() {
    const { query } = this.props;
    const { status } = this.state;

    switch (status) {
      case STATUS.PENDING:
        return <Loader query={query} />;

      case STATUS.RESOLVED:
        return this.galleryView();

      case STATUS.REJECTED:
        return this.errorView();

      default:
        return this.idleView();
    }
  }
}
