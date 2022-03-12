import "./card.css";
import card from "./card.html";

export default {
  title: "Components/Card",
};

export const Small = () => `
<div style="margin: 2rem; background-color: white; height: 20rem; width: 15rem; border: 1px solid black; font-size: 0.6rem;">
    ${card}
</div>
`;

export const Medium = () => `
<div style="margin: 2rem; background-color: white; height: 30rem; width: 25rem; border: 1px solid black;">
    ${card}
</div>
`;

export const Large = () => `
<div style="margin: 2rem; background-color: white; height: 40rem; width: 40rem; border: 1px solid black; font-size: 1.6rem;">
    ${card}
</div>
`;
