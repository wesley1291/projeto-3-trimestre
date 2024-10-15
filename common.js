import {getcCSS, tickconfig} from "./common.js"
const getcCSS = (variavel) => {
     return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickconfig = {
    color: getcCSS('--primary-color'),
    size: 16,
    family: getcCSS('--font')
}
export {getcCSS,tickconfig}