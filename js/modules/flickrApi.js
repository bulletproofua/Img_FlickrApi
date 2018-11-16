export class FlickApi {

    constructor(api_key, photosPerPage) {
        this.api_key = api_key ? api_key : '';
        this.photosPerPage = photosPerPage ? photosPerPage : 10;
    }

    getPhotos(tags, pageNumber) {
        let page = pageNumber ? pageNumber : 1;
        let theUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.api_key}&tags=${tags}&per_page=${this.photosPerPage}&page=${page}&format=json&nojsoncallback=1`
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText).photos.photo;
    }

    preparePhotoURL(imgObject) {
        return `https://farm${imgObject.farm}.staticflickr.com/${imgObject.server}/${imgObject.id}_${imgObject.secret}.jpg`;
    }

    prepareURLForPhotos(list) {
        return list.map((photo) => {
            return this.preparePhotoURL(photo);
        });
    }
}
