import "./index.scss";
// import { Header } from "../index";
import Footer from "../Footer";
import Header from "../Header";
import Button from "../Button";
import Divider from "../Divider";
import Movies from "../Movies";

function Main({ children }) {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-container">
            <span className="hero-text">Wanna more content?</span>
            <Button size="big">Get Access</Button>
          </div>
        </section>
        <Divider />
        <section className="main-content">
          <Movies />
          <div className="get_content_button">
            <Button size="big">Get more content</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
