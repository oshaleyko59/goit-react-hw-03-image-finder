import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { ImageGalleryItem, Gallery, Img } from './styled';
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

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page, status } = this.state;
    if (status === STATUS.PENDING) return;

    if (prevProps.query !== query) {
      //new query
      this.addPictures(1);
      return;
    }

    if (prevState.page !== page) {
      //next page
      this.addPictures(page);
    }
  }

  addPictures(page) {
    let newState = { status: STATUS.PENDING, page };
    if (page === 1) newState.gallery = [];
    this.setState(newState);

    const { query } = this.props;
    galleryApi
      .fetchGallery(query, page)
      .then(({ hits, totalHits }) => {
        if (!hits.length) {
          return Promise.reject(new Error(`Nothing found for "${query}`));
        }

        this.setState(state => ({
          gallery: [...state.gallery, ...hits],
          totalHits,
          status: STATUS.RESOLVED,
        }));
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

  render() {
    const { query } = this.props;
    const { status, gallery, totalHits } = this.state;

    return (
      <div ref={this.listRef}>
        {status === STATUS.REJECTED && <h3>{this.state.error.message}"</h3>}
        {status !== STATUS.IDLE && (
          <Gallery>
            {gallery.map(({ id, webformatURL, tags }, index) => {
              return (
                <ImageGalleryItem
                  key={id}
                  onClick={() => {
                    this.handleClickItem(index);
                  }}
                >
                  <Img src={webformatURL} alt={tags} loading="lazy" />
                </ImageGalleryItem>
              );
            })}
          </Gallery>
        )}
        {status === STATUS.PENDING && <Loader query={query} />}
        {status === STATUS.RESOLVED && gallery.length < totalHits && (
          <Button loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
