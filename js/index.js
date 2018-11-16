import { FlickApi } from './modules/flickrApi';
import { Dom } from './modules/dom';

function init() {
    const API_KEY = 'd1d0e4936bb67d5b928fa5e743bce897';

    let inputValue = '';
    let pageNumber = 1;

    let flick = new FlickApi(API_KEY);
    let domM = new Dom('search', 'imgBox', 'showMoreWrapper', {
        imgWrapperClassName: 'img__wrapper',
        imgClassName: 'img__box_content'
    });

    domM.hideShowMoreBtn();

    searchButton.onclick = function() {
        inputValue = domM.getSearchValue();
        if (inputValue) {
            pageNumber = 1;
            domM.hideShowMoreBtn();
            domM.cleanImgArea();
            setPhotos(inputValue);
            domM.showShowMoreBtn();
        }
    };
    
    showMore.onclick = function() {
        pageNumber++;
        if (inputValue) {
            setPhotos(inputValue, pageNumber);
        }
    }

    function setPhotos(val, pageNumber) {
        let photos = flick.getPhotos(val, pageNumber);
        let links = flick.prepareURLForPhotos(photos);
        
        links.map((el) => {
            domM.insertImgToPage(el);
        })
    }
};

init();
