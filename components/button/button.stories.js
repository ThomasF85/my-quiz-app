import "./button.css";
import button from "./button.html";

export default {
  title: "Components/Button",
};

export const small = () => `
<div style="margin: 1em; padding: 1em 1em; width: 20em; background-color: white; border: 1px solid black; font-size: 0.6rem;">
    ${button}
</div>
`;

export const medium = () => `
<div style="margin: 1em; padding: 1em 1em; width: 20em; background-color: white; border: 1px solid black;">
    ${button}
</div>
`;

export const large = () => `
<div style="margin: 1em; padding: 1em 1em; width: 20em; background-color: white; border: 1px solid black; font-size: 1.6rem;">
    ${button}
</div>
`;
