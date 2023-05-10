import PropTypes from "prop-types";
import {ImageGalleryItem, Gallery, Img} from "./styled"

export const ImageGallery = ({ gallery }) => {
  return (
    <Gallery>
      {gallery.map(({ id, scr, alt }) => (
        <ImageGalleryItem key={id}>
          <Img src={scr} alt={alt} />
        </ImageGalleryItem>
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    scr: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }))
}

/* Опис компонента <ImageGalleryItem>
Компонент елемента списку із зображенням. Створює DOM-елемент:
<li class="gallery-item">
  <img src="" alt="" />
</li>
 */
