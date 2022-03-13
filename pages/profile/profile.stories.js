import "./profile.css";
import profile from "./profile.html";

export default {
  title: "Pages/Profile",
};

export const page = () => `
<div style="margin: 2em; padding: 0em 1em; background-color: var(--secondary-color-bright); height: 30em; width: 28em; border: 1px solid black;">
    ${profile}
</div>
`;
