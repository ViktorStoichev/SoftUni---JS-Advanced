window.addEventListener("load", solve);

function solve() {
    const gemNameElement = document.getElementById('gem-name');
    const colorElement = document.getElementById('color');
    const caratsElement = document.getElementById('carats');
    const priceElement = document.getElementById('price');
    const typeElement = document.getElementById('type');
    const addBtnElement = document.getElementById('add-btn');
    const previewListElement = document.getElementById('preview-list');
    const collectionElement = document.getElementById('collection');

    addBtnElement.addEventListener('click', function () {
        if (gemNameElement.value.length === 0 || colorElement.value.length === 0 || caratsElement.value.length === 0
            || priceElement.value.length === 0 || typeElement.value.length === 0) {

        } else {
            //Create preview list
            const previewLiElement = document.createElement('li');
            previewLiElement.classList.add('gem-info');
            previewListElement.append(previewLiElement);
            const articleElement = document.createElement('article');
            previewLiElement.append(articleElement);
            const h4Element = document.createElement('h4');
            h4Element.textContent = gemNameElement.value;
            articleElement.append(h4Element);
            const colorP = document.createElement('p');
            colorP.textContent = 'Color: ' + colorElement.value;
            articleElement.append(colorP);
            const caratsP = document.createElement('p');
            caratsP.textContent = 'Carats: ' + caratsElement.value;
            articleElement.append(caratsP);
            const priceP = document.createElement('p');
            priceP.textContent = 'Price: ' + priceElement.value + '$';
            articleElement.append(priceP);
            const typeP = document.createElement('p');
            typeP.textContent = 'Type: ' + typeElement.value;
            articleElement.append(typeP);
            //Add buttons to it
            const saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save to Collection';
            previewLiElement.append(saveBtn);
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit Information';
            previewLiElement.append(editBtn);
            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            previewLiElement.append(cancelBtn);
            //Save input info
            const gemNameSaveInfo = gemNameElement.value;
            const colorSaveInfo = colorElement.value;
            const caratsSaveInfo = caratsElement.value;
            const priceSaveInfo = priceElement.value;
            const typeSaveInfo = typeElement.value;
            //Clear input and disable add button
            gemNameElement.value = '';
            colorElement.value = '';
            caratsElement.value = '';
            priceElement.value = '';
            typeElement.value = '';
            addBtnElement.disabled = true;
            //Remove preview list, return input and enable add button
            editBtn.addEventListener('click', function () {
                previewLiElement.remove();
                gemNameElement.value = gemNameSaveInfo;
                colorElement.value = colorSaveInfo;
                caratsElement.value = caratsSaveInfo;
                priceElement.value = priceSaveInfo;
                typeElement.value = typeSaveInfo;
                addBtnElement.disabled = false;
            })
            //Move info from preview to collection and enable add button
            saveBtn.addEventListener('click', function () {
                previewLiElement.remove();
                const collectionLiElement = document.createElement('li');
                collectionElement.append(collectionLiElement);
                const itemP = document.createElement('p');
                itemP.classList.add('collection-item');
                itemP.textContent = `${gemNameSaveInfo} - 
            ${colorP.textContent}/ ${caratsP.textContent}/ ${priceP.textContent}/ ${typeP.textContent}`;
                collectionLiElement.append(itemP);
                addBtnElement.disabled = false;
            })
            //Remove preview list and enable add button
            cancelBtn.addEventListener('click', function () {
                previewLiElement.remove();
                addBtnElement.disabled = false;
            })
        }
    })
}
