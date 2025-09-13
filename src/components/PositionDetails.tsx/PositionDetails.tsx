import { useParams } from "react-router";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../store/ThemeContext";
import "./PositionDetails.scss";

export const PositionDetails = () => {
  const { positions } = useContext(ThemeContext);

  const { id } = useParams();

  const position = positions.find((p) => p.id === +id!);

  const array = position?.website.split("/") || [];
  const companySite = array[array?.length - 1];

  console.log(id);

  return (
    <ThemeProvider>
      <section className="details">
        <div className="container">
          <div className="panel">
            <div
              className="panel__logo"
              style={{ backgroundColor: `${position?.logoBackground}` }}
            >
              <img src={position?.logo} alt={position?.position} />
            </div>
            <div className="panel__content">
              <div className="panel__box">
                <h2 className="panel__title">{position?.company}</h2>
                <p className="panel__name">{companySite}</p>
              </div>

              <div className="panel__box">
                <a href={position?.website} className="panel__site">
                  Company Site
                </a>
              </div>
            </div>
          </div>

          <div className="details__block">
            <span>{position?.postedAt}</span>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#6E8098" />
            </svg>

            <span>{position?.contract}</span>
          </div>

          <div className="details__wrapper">
            <div>
              <h1 className="details__main-title">{position?.position}</h1>
              <span className="details__country">{position?.location}</span>
            </div>
            <div>
              <button className="details__btn">Apply Now</button>
            </div>
          </div>
          <p style={{ marginBottom: "40px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <h2 className="details__title">Requirements</h2>
          <p className="details__text">{position?.requirements.content}</p>
          <ul className="details__list">
            {position?.requirements.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="details__title">What You Will Do</h2>
          <p className="details__text">{position?.role.content}</p>
          <ol>
            {position?.role.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
    </ThemeProvider>
  );
};
