function initMobiMenu(setings) {

        let workingArray = [],
            elem = setings.clone,
            newElem = document.createElement('div');

        newElem.setAttribute('class', setings.addClass);
        for (let i = 0;i < elem.length; i++) {
            let int = document.querySelector(elem[i]);
            if (int) {
                workingArray.push(elem[i]);
            } else {
                workingArray.push('null');
            }
        }
        for (let r = 0;r < workingArray.length; r++) {
            if (workingArray[r] == 'null') continue;
            let elem = document.querySelector(workingArray[r]);
            newElem.appendChild(elem.cloneNode(true));
        }
        if(newElem.children.length > 0) {
            let insertChild = document.querySelector(setings.insert);
            insertChild.appendChild(newElem);
        }

}

export default initMobiMenu;