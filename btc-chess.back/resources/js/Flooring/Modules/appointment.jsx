import AppointmentForm from "@/Pages/Partials/AppointmentForm"

export default function AppointmentSection() {
  return(
    <div className="global-section appointment-section" id="appointment">
      <div className="container">
        <h3 className="global-section-title appointment-title">LOOKING FOR NEW <b>EXCLUSIVE</b> BRANDED FLOORS?</h3>
        <div className="appointment-subtitle">Tell us more about your project. Please provide date and time options for a personal consultation at our showroom.</div>
        <div className="appointment-form">
          <AppointmentForm/>
        </div>
      </div>
    </div>
  )
}