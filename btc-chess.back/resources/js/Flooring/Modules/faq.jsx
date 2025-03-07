export default function FAQSection({faqs}) {


  return(
    <div className="global-section faq-section">
      <div className="container">
        <div className="about-wrapp">
          <h4 className="global-section-smalltitle faq-title">Have questions? <br /> We have answers.</h4>
          <div className="faq-box">
            <div className="global-section-subtitle faq-subtitle">Find the answers to your flooring questions with our product FAQs.</div>
            <ul className="faq-list">
                {faqs.map((item, index) => (
                    <li className="faq-list__item">
                        <div className="faq-list__item_col">
                            <div className="faq-list__item_number">{`(${index})`}</div>
                        </div>
                        <div className="faq-list__item_col">
                            <div className="faq-list__item_question">{item.question}</div>
                        </div>
                        <div className="faq-list__item_col">
                            <div className="faq-list__item_answer">{item.answer}</div>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
