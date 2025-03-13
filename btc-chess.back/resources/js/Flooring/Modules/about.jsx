export default function AboutSection({whoWePage}) {
  return(
    <div className="global-section about-section">
      <div className="container">
        <div className="about-wrapp">
          <h4 className="global-section-smalltitle about-title">Who we are?</h4>
          <div className="about-box">
            <div className="global-section-subtitle about-subtitle">{whoWePage.big_text}</div>
            <div className="about-description">{whoWePage.small_text}</div>
            <div className="about-stats">
              <div className="about-stats__item">
                <span className="value">{whoWePage.counter1}</span>
                <span className="description">Years of experience</span>
              </div>
              <div className="about-stats__item">
                <span className="value">{whoWePage.counter2}+</span>
                <span className="description">Happy customers</span>
              </div>
              <div className="about-stats__item">
                <span className="value">{whoWePage.counter3}</span>
                <span className="description">Full finish wear layer warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
