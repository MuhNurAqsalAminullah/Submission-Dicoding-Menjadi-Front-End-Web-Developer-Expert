/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';

const informationTitle = (resto) => `
    <h1>${resto.name}</h1>
`;

const createRestoranDetailTemplate = (resto) => `
    <div class="image_detail">
        <img tabindex="0" class="post-item_thumbnail"src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"alt="Gambar Restoran ${resto.name}">
    </div>
    <div class="descDocs">
        <h3>Descriptions : </h3>
        <p>${resto.description}</p>
    </div>
`;

const detailInformatioAD = (resto) => `
    <h3 tabindex="0">Location : <span> Kota ${resto.city}, ${resto.address}</span></h3>
    <h3 tabindex="0">Rating : <span>${resto.rating}</span></h3>
`;

const detailCategoriInformation = (resto) => `
    <p tabindex="0">- ${resto.name}</p>
`;

const detailMenuFoodInformation = (resto) => `
    <p tabindex="0">- ${resto.name}</p>
`;
const detailMenuDrinkInformation = (resto) => `
    <p tabindex="0">- ${resto.name}</p>
`;

const detailCostumerReviewInformation = (resto) => `
    <div class="ReviewCard">
        <table>
            <tr>
                <td tabindex="0"><h3>Name</h3></td>
                <td tabindex="0"><strong>:</strong> Kota ${resto.name}</td>
            </tr>
            <tr>
                <td tabindex="0"><h3>Tanggal</h3></td>
                <td tabindex="0"><strong>:</strong> ${resto.date}</td>
            </tr>
            <tr>
                <td tabindex="0"><h3>review</h3></td>
                <td tabindex="0"><strong>:</strong> ${resto.review}</td>
            </tr>
        </teble>
    </div>
    
`;

const createRestoItemTemplate = (resto) => `
    <div class="post-item">
        <div class="image">
            <img tabindex="0" class="post-item_thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
            src='./images/placeholder-large.jpg'
            alt='Gambar Restoran ${resto.name}'>
            <p tabindex="0" class="post_city">Lokasi Kota ${resto.city}</p>
            <p tabindex="0" class="post_reting">Rating : ${resto.rating}</p>
        </div>
        <div class="post-item_content">
            <h1 class="post_title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
            <p tabindex="0" class="post-item_description">${resto.description}</p>
        </div>
    </div>
`;

const createLikeRestoranButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedRestoranButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  informationTitle,
  createRestoItemTemplate,
  detailInformatioAD,
  detailCategoriInformation,
  detailMenuFoodInformation,
  detailMenuDrinkInformation,
  detailCostumerReviewInformation,
  createRestoranDetailTemplate,
  createLikeRestoranButtonTemplate,
  createLikedRestoranButtonTemplate,
};
