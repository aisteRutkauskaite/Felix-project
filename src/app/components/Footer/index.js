import "./index.scss";
import creditCards from "../../../images/credit-card-logos.png";

function Footer() {
  return (
    <footer className="footer">
      <p>We care about your entertainment. Copyright © 2019–2021 felix.com</p>
      <img src={creditCards} class="footer_cards" alt="credit cards" />
    </footer>
  );
}

export default Footer;
