import "./navigation.css";
import navigation from "./navigation.html";

export default {
  title: "Components/Navigation",
};

export const Small = () => `
<div style="height: 3rem; width: 15rem; border: 1px solid black; font-size: 0.6rem;">
    ${navigation}
</div>
`;

export const Medium = () => `
<div style="height: 5rem; width: 25rem; border: 1px solid black;">
    ${navigation}
</div>
`;

export const Large = () => `
<div style="height: 8rem; width: 40rem; border: 1px solid black; font-size: 1.6rem;">
    ${navigation}
</div>
`;
