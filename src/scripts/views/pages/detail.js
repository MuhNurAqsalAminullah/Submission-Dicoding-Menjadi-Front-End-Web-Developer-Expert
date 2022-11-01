import FavoriteRestorantIdb from '../../data/favoriterestoran-idb';
import getAllResoranSource from '../../data/restourant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonpresenter from '../../utils/like-button-presenter';
import {
  informationTitle,
  createRestoranDetailTemplate,
  detailInformatioAD,
  detailCategoriInformation,
  detailCostumerReviewInformation,
  detailMenuDrinkInformation,
  detailMenuFoodInformation,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="containerDetail">
    <div tabindex="0" id="detilTitle" class="detilTitle"></div>
      <div class="detailCard">
        <div id="resto" class="resto"></div>
        <div class="infoBox">
          <div id="insformationAD" class="insformationAD"></div>
          <h3 tabindex="0">Categories :</h3>
          <div id="categori" class="categori"></div>
          <h3 tabindex="0">Menu Food :</h3>
          <div id="food" class="food"></div>
          <h3 tabindex="0">Menu Drink :</h3>
          <div id="drink" class="drink"></div>
        </div>
      </div>

      <div class="containerReview">
      <h2 tabindex="0" class="ReviewTitle">Review Pelanggan</h2>
          <div id="review" class="review"></div>
      </div>
      
      <div id="likeButtonContainer"></div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restons = await getAllResoranSource.detailRestoran(url.id);
    const restoCategoris = await getAllResoranSource.detailRestoranCategories(url.id);
    const restoMenuFoods = await getAllResoranSource.detailRestoranMenuFood(url.id);
    const restoMenuDrinks = await getAllResoranSource.detailRestoranMenuDrink(url.id);
    const restoReviews = await getAllResoranSource.detailCustomerReview(url.id);

    const restoTitle = document.querySelector('#detilTitle');
    const restoContainer = document.querySelector('#resto');
    const restoInfoAD = document.querySelector('#insformationAD');
    const restoCategori = document.querySelector('#categori');
    const restoMenuFood = document.querySelector('#food');
    const restoMenudDrink = document.querySelector('#drink');
    const restoReview = document.querySelector('#review');

    restoTitle.innerHTML += informationTitle(restons);
    restoContainer.innerHTML += createRestoranDetailTemplate(restons);
    restoInfoAD.innerHTML += detailInformatioAD(restons);
    restoCategoris.forEach((resto) => {
      restoCategori.innerHTML += detailCategoriInformation(resto);
    });
    restoMenuFoods.forEach((resto) => {
      restoMenuFood.innerHTML += detailMenuFoodInformation(resto);
    });
    restoMenuDrinks.forEach((resto) => {
      restoMenudDrink.innerHTML += detailMenuDrinkInformation(resto);
    });
    restoReviews.forEach((resto) => {
      restoReview.innerHTML += detailCostumerReviewInformation(resto);
    });

    LikeButtonpresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRstaurant: FavoriteRestorantIdb,
      restoran: {
        id: restons.id,
        name: restons.name,
        pictureId: restons.pictureId,
        city: restons.city,
        address: restons.address,
        rating: restons.rating,
        description: restons.description,
      },
    });
  },
};

export default Detail;
