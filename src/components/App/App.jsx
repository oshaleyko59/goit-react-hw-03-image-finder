import React, { Component } from "react";
import { Searchbar } from "components/Searchbar";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34354897-5c7498590c159fab15c37271f';
const searchParams = new URLSearchParams({  //TODO:
  q: "cat",
  page: 1, //default
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page:12,
});

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
/*
У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

*id - унікальний ідентифікатор
*webformatURL - посилання на маленьке зображення для списку карток
*largeImageURL - посилання на велике зображення для модального вікна */

export class App extends Component {

  render () {
  return (
    <div>

    </div>
  );}
};
