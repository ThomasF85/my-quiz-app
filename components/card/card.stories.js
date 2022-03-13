import "./card.css";
import card from "./card.html";
import cardWithAnswer from "./card-with-answer.html";
import cardBookmarked from "./card-bookmarked.html";

export default {
  title: "Components/Card",
};

export const small = () => `
<div style="margin: 2em; background-color: var(--secondary-color-bright); height: 30em; width: 25em; border: 1px solid black; font-size: 0.6rem;">
    ${card}
</div>
`;

export const medium = () => `
<div style="margin: 2em; background-color: var(--secondary-color-bright); height: 30em; width: 25em; border: 1px solid black;">
    ${card}
</div>
`;

export const large = () => `
<div style="margin: 2em; background-color: var(--secondary-color-bright); height: 30em; width: 25em; border: 1px solid black; font-size: 1.6rem;">
    ${card}
</div>
`;

export const withAnswer = () => `
<div style="margin: 2em; background-color: var(--secondary-color-bright); height: 30em; width: 25em; border: 1px solid black;">
    ${cardWithAnswer}
</div>
`;

export const bookmarked = () => `
<div style="margin: 2em; background-color: var(--secondary-color-bright); height: 30em; width: 25em; border: 1px solid black;">
    ${cardBookmarked}
</div>
`;
