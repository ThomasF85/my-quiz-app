import "./navigation.css";
import navigation from "./navigation.html";

export default {
  title: "Components/Navigation",
};

export const small = () => `
<div style="height: 5em; width: 25em; border: 1px solid black; font-size: 0.6rem;">
    ${navigation}
</div>
`;

export const medium = () => `
<div style="height: 5em; width: 25em; border: 1px solid black;">
    ${navigation}
</div>
`;

export const large = () => `
<div style="height: 5em; width: 25em; border: 1px solid black; font-size: 1.6rem;">
    ${navigation}
</div>
`;
