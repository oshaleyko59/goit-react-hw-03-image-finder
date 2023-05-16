import styled from 'styled-components';

/* ImageGallery styles */
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`;

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

/* ImageGalleryItem styles */
export const ImageGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

/* ImageGalleryItem-image styles */
export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Err = styled.span`
  margin-top: 38px;
  margin-left: auto;
  margin-right: auto;
  color: red;
  font-size: 24px;
  font-weight: 700;
`;
