import "./page.css";
import "../../components/card/card.css";
import template from "./page.html";
import withCards from "./page-with-cards.html";

export default {
  title: "Pages/Template",
};

export const page = () => template;

export const pageWithCards = () => withCards;
