import "./card.css";
import card from "./card.html";
import cardWithAnswer from "./card-with-answer.html";
import cardBookmarked from "./card-bookmarked.html";

export default {
  title: "Components/Card",
};

export const small = () => `
<div style="font-size: 0.6rem;">
    ${card}
</div>
`;

export const medium = () => `
<div>
    ${card}
</div>
`;

export const large = () => `
<div style="font-size: 1.6rem;">
    ${card}
</div>
`;

export const withAnswer = () => `
<div>
    ${cardWithAnswer}
</div>
`;

export const bookmarked = () => `
<div>
    ${cardBookmarked}
</div>
`;
