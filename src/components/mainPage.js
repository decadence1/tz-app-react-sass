import React from "react";
import "./mainPage.scss";

function MainPage() {
  const sections = [
    {
      number: "1",
      title: "Получите<br /> партнерскую ссылку",
      colorClass: "blue",
      image: `${process.env.PUBLIC_URL}/img/mennotepad.png`,
    },
    {
      number: "2",
      title: "Расскажите<br /> о IIII.COM",
      colorClass: "green",
      image: `${process.env.PUBLIC_URL}/img/hearts.png`,
    },
    {
      number: "3",
      title: "Получайте хороший процент<br /> от покупок по вашей ссылке!",
      colorClass: "purple",
      image: `${process.env.PUBLIC_URL}/img/money.png`,
    },
  ];

  return (
    <div className="main-page">
      <h1>Зарабатывайте вместе с нами!</h1>
      <div className="border_main">
        <div className="sections">
          {sections.map((section, index) => (
            <div className={`section ${section.colorClass}`} key={index}>
              <div className="section-header">
                <div className={`section-number number-${section.number}`}>
                  {section.number}
                </div>
                <div
                  className="section-text"
                  dangerouslySetInnerHTML={{ __html: section.title }}
                ></div>
              </div>
              <img src={section.image} alt={`Image ${section.number}`} />
            </div>
          ))}
          <div className="arrows">
            <img
              className="overlay-image"
              src={`${process.env.PUBLIC_URL}/img/arrow.png`}
              alt="Overlay Image 1"
            />
            <img
              className="overlay-image"
              src={`${process.env.PUBLIC_URL}/img/arrow.png`}
              alt="Overlay Image 2"
            />
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="partner-button">
          <img
            src={`${process.env.PUBLIC_URL}/img/user.png`}
            alt="Your Image"
          />
          <span>Стать партнером</span>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
