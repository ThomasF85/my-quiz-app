import "./heading.css";
import heading from "./heading.html";

export default {
  title: "Components/Heading",
};

export const small = () => `
<div style="height: 5em; width: 25em; border: 1px solid black; font-size: 0.6rem;">
    ${heading}
</div>
`;

export const medium = () => `
<div style="height: 5em; width: 25em; border: 1px solid black;">
    ${heading}
</div>
`;

export const large = () => `
<div style="height: 5em; width: 25em; border: 1px solid black; font-size: 1.6rem;">
    ${heading}
</div>
`;
