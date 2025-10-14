import { useParams } from "react-router";
import { useContext } from "react";

import "./JobDetails.scss";
import { JobContext } from "../Job/context/JobContext";

export const JobDetails = () => {
  const { jobs } = useContext(JobContext);

  const { id } = useParams();

  const position = jobs.find((p) => p.id === +id!);

  const array = position?.website.split("/") || [];
  const companySite = array[array?.length - 1] + ".com";

  console.log(id);

  return (
    <section className="job">
      <div className="container">
        <div className="job__employer">
          <div
            className="job__employer-logo"
            style={{ backgroundColor: `${position?.logoBackground}` }}
          >
            <img
              src={`${import.meta.env.BASE_URL}/${position?.logo}`}
              alt={position?.position}
            />
          </div>
          <div className="job__employer-content">
            <div className="job__employer-box">
              <h2 className="job__employer-title">{position?.company}</h2>
              <p className="job__employer-name">{companySite}</p>
            </div>

            <div className="job__employer-box">
              <a href={position?.website} className="job__employer-site">
                Company Site
              </a>
            </div>
          </div>
        </div>

        <div className="job__details">
          <div className="job__details-hero">
            <div className="job__details-info">
              <div className="job__details-box">
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

              <div>
                <h1 className="job__details-main-title">
                  {position?.position}
                </h1>
                <span className="job__details-country">
                  {position?.location}
                </span>
              </div>
            </div>
            <div>
              <button className="job__details-btn">Apply Now</button>
            </div>
          </div>

          <div className="job__details-description">
            <p style={{ marginBottom: "40px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>

          <div className="job__details-requirements">
            <h2 className="details__title">Requirements</h2>
            <p className="details__text">{position?.requirements.content}</p>
            <ul className="details__list">
              {position?.requirements.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="job__details-do">
            <h2 className="details__title">What You Will Do</h2>
            <p className="details__text">{position?.role.content}</p>
            <ol>
              {position?.role.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
