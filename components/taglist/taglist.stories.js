import "./taglist.css";
import taglist from "./taglist.html";

export default {
  title: "Components/Taglist",
};

export const Small = () => `
<div style="margin: rem; padding: 1em; background-color: white; height: 5em; width: 25em; border: 1px solid black; font-size: 0.6rem;">
${taglist}
</div>
`;

export const Medium = () => `
<div style="margin: rem; padding: 1em; background-color: white; height: 5em; width: 25em; border: 1px solid black;">
${taglist}
</div>
`;

export const Large = () => `
<div style="margin: rem; padding: 1em; background-color: white; height: 5em; width: 25em; border: 1px solid black; font-size: 1.6rem;">
    ${taglist}
</div>
`;
