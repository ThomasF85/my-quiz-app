import "./button.css";
import button from "./button.html";

export default {
  title: "Components/Button",
};

export const small = () => `
<div style="font-size: 0.6rem;">
    ${button}
</div>
`;

export const medium = () => `
<div>
    ${button}
</div>
`;

export const large = () => `
<div style="font-size: 1.6rem;">
    ${button}
</div>
`;
