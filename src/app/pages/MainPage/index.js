import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Movies from "../../components/Movies";

function Main() {
  const content = localStorage.getItem("token") ? (
    <main>
      <section className="main-content">
        <Movies />
      </section>
    </main>
  ) : (
    <main>
      <section className="hero">
        <div className="hero-container">
          <h2 className="hero-text">Wanna more content?</h2>
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
  );
  return <>{content}</>;
}

export default Main;
