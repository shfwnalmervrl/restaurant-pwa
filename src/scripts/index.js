import 'regenerator-runtime'; /* for async await transpile */
// css
import '../styles/root.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/resto-detail.css';
import '../styles/resto-fav.css';
// js
import App from './views/app';
import swRegister from './utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
    button: document.querySelector('.menu'),
    drawer: document.querySelector('.nav-list'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    document.querySelector('.container').scrollIntoView();
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
