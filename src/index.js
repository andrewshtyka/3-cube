// files
import "./3d-scene/main";

// assets
import { titlesArr } from "./3d-scene/lib/handleTextures";
import { buttonStatus } from "./3d-scene/main";

/**
 * ======================================== create markup for a list
 */
const list = document.querySelector("ul.list");
titlesArr.forEach(({name, title}) => {
    const item = `
    <li class="list_item">
        <button type="button" class="button" data-name="${name}">${title}</button>
    </li>
    `;

    list.insertAdjacentHTML('beforeend', item);
})

/**
 * ======================================== handle mouse events for list items (buttons)
 */
function handleHover() {
    buttonStatus.isHovered = true;
}

function handleBlur(e) {
    buttonStatus.isHovered = false;
}

const buttonsArr = document.querySelectorAll("button.button");
buttonsArr.forEach(button => {
    button.removeEventListener("mouseover", handleHover);
    button.removeEventListener("focus", handleHover);
    button.removeEventListener("mouseleave", handleBlur);
    button.removeEventListener("blur", handleBlur);
    
    button.addEventListener("mouseover", handleHover);
    button.addEventListener("focus", handleHover);
    button.addEventListener("mouseleave", handleBlur);
    button.addEventListener("blur", handleBlur);
})

/**
 * ======================================== handle "Escape"
 */
window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        if (document.activeElement) {
            handleBlur();
            document.activeElement.blur();
        }
    }
})

/**
 * ======================================== handle click on empty space (for safari mobile)
 */
document.body.addEventListener("click", (e) => {
    if (!e.target.matches("button")) {
        if (document.activeElement) {
            handleBlur();
            document.activeElement.blur();
        }
        // handleBlur();
        // document.activeElement.blur();
    }
});
