import getAllResoranSource from '../../data/restourant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="latest">
      <section class="content">
          <h1>Explor Restorant</h1>
          <hr>

          <div id="post" class="post"></div>
          
      </section>
    </div>
          
        `;
  },

  async afterRender() {
    const restorans = await getAllResoranSource.Home();
    const restoContainer = document.querySelector('.post');
    restorans.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
