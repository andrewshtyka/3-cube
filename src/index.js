import "./3d-scene/main";

const list = document.querySelector("ul.list");

const titlesArr = [
    {id: "banks", name: "Banks"},
    {id: "charli_xcx", name: "Charli XCX"},
    {id: "bernache", name: "Emma (Men I Trust)"},
    {id: "sky_ferreira", name: "Sky Ferreira"},
    {id: "the_japanese_house", name: "The Japanese House"},
    {id: "the_weeknd", name: "The Weeknd"},
];

titlesArr.forEach(({id, name}) => {
    const item = `
    <li class="list_item">
        <button type="button" class="button" data-name="${id}">${name}</button>
    </li>
    `;

    list.insertAdjacentHTML('beforeend', item);
})
