import AppointmentForm from "@/Pages/Partials/AppointmentForm"
// import appointmentPhoto from "../../../img/content/home/appointment/app-photo.png"

export default function AppointmentSection() {
  return(
    <div className="global-section s-py-100 appointment-section">
      <div className="container">
        <h3 className="global-section-title appointment-title title-white"><b>Book</b> appointment</h3>
        <div className="appointment-box">
          <div className="appointment-form">
            <div className="appointment-form__title">Let’s work together!</div>
            <AppointmentForm/>
          </div>
          <div className="appointment-photo">
            {/* <img src={appointmentPhoto} alt="img" className="appointment-photo__img" width="530" height="485" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}