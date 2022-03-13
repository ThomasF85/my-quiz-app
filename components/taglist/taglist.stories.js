import "./taglist.css";
import taglist from "./taglist.html";

export default {
  title: "Components/Taglist",
};

export const small = () => `
<div style="font-size: 0.6rem;">
${taglist}
</div>
`;

export const medium = () => `
<div>
${taglist}
</div>
`;

export const large = () => `
<div style="font-size: 1.6rem;">
    ${taglist}
</div>
`;
