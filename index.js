let data = `{ "advantages" : [
{ "title":"Boosting up" , "subtitle":"your exsisting development team", "imgUrl": "/src/img/1.png" }, 
{ "title":"Automating" , "subtitle":"your business processes", "imgUrl": "/src/img/2.png" },
{ "title":"Bringing to live" , "subtitle":"our Startup idea" , "imgUrl": "/src/img/3.png"},
{ "title":"Building" , "subtitle":"custom CRM/ERP" , "imgUrl": "/src/img/3.png"}
]}`;

const containerWrap = document.querySelector('.advantages')

const advantages = JSON.parse(data).advantages;

advantages.forEach(advantage => {
    const {imgUrl, title, subtitle} = advantage;
    containerWrap.appendChild(renderAdvantageItem( imgUrl, title, subtitle ));
});

function renderAdvantageItem(imgUrl, title, subtitle) {
    const blockContent = document.createElement('div');
    blockContent.className = 'blocks__content';
    blockContent.innerHTML = `
    <div class="blocks__image">
        <img src="${imgUrl}" alt="" class="blocks__dark">
        <h3 class="blocks__text">${title}</h3>
        <h4 class="blocks__text4">${subtitle}</h4>
    </div>
`;
    
    return blockContent
}