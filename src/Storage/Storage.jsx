const getStorageString = () =>{
    const storageCardString = localStorage.getItem('card');
    if(storageCardString){
        return JSON.parse(storageCardString)
    }
    return [];
}
const saveCardtols = card =>{
    const cardStringfied = JSON.stringify(card);
    localStorage.setItem('card', cardStringfied);
}
const addTols = id =>{
    const card = getStorageString();
    card.push(id);
    // save to Local Storgae
    saveCardtols(card);
}
export{addTols, getStorageString}