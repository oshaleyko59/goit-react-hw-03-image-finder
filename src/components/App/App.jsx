import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';

export class App extends Component {
  state = {
    query: '',
    isModalVisible: false,
    active: null,
  };

  saveQuery = query => {
    this.setState({ query });
  };

  saveActive = active => {
    this.setState({ active, isModalVisible: true });
  };

  closeModal = () => {
      this.setState({ isModalVisible: false });
  }

  render() {
    const { saveQuery, saveActive, closeModal } = this;
    const { query, isModalVisible, active } = this.state;
    
    return (
      <>
        <Searchbar onSubmit={saveQuery} />
        <ImageGallery query={query} onClick={saveActive} />
        {isModalVisible && (
          <Modal src={active.src} alt={active.alt} closeModal={closeModal} />
        )}
        <ToastContainer />
      </>
    );
  }
}
