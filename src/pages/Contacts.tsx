type Props = {};
const Contacts = (props: Props) => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <a href="https://www.google.de/maps/place/Industriestra%C3%9Fe+15,+28832+Achim">
              Deutschland, Achim
            </a>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram </h2>
            <p>
              <a href="https://web.telegram.org/k/">+491747006089</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="https://mail.google.com">vanna7417@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Contacts;
