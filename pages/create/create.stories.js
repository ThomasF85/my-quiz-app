import "./create.css";
import create from "./create.html";

export default {
  title: "Pages/Create",
};

export const page = () => `
<div style="margin: 2em; padding: 0em 1em; background-color: var(--secondary-color-bright); height: 30em; width: 28em; border: 1px solid black;">
    ${create}
</div>
`;
