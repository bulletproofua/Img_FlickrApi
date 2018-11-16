export class Dom {

    constructor(searchInputId, imgBoxId, showMoreWrapperId, classes) {
        this.searchInputId = searchInputId ? searchInputId : '';
        this.imgBoxId = imgBoxId ? imgBoxId : '';
        this.showMoreWrapperId = showMoreWrapperId ? showMoreWrapperId : '';
        this.classes = classes ? classes : { imgWrapperClassName: "", imgClassName: "" }  ;
    }
    
    getSearchValue() {
        try {
            return document.getElementById(this.searchInputId).value;
        } catch (error) {
            return '';
        }
    }
    
    insertImgToPage(imgUrl) {
        var div = document.createElement('div');
        div.className = this.classes.imgWrapperClassName;

        var img = document.createElement('img');
        img.className = this.classes.imgClassName,
        img.src = imgUrl;

        div.appendChild(img);
        document.getElementById(this.imgBoxId).appendChild(div);
    }
    
    cleanImgArea(){
        var myNode = document.getElementById(this.imgBoxId);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    hideShowMoreBtn() {
        document.getElementById(this.showMoreWrapperId).style.visibility = 'hidden';
    }

    showShowMoreBtn() {
        document.getElementById(this.showMoreWrapperId).style.visibility = 'visible';
    }
}
