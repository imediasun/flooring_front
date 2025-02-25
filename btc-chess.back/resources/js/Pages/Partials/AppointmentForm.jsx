import SvgIcon from "@/Flooring/Components/SvgIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";

const getPattern = (pattern) => {
  switch (pattern) {
    case "email":
      return new RegExp(
        "^[\\w!#$%&'*+\\-/=?^`{|}~]+(?:\\.[\\w!#$%&'*+\\-/=?^`{|}~]+)*@(?:([a-z0-9][a-z0-9-]{0,62}[a-z0-9]|[a-z])\\.)+[a-z]{2,11}|\\d{1,3}(?:\\.\\d{1,3}){3}(?::\\d{1,11})?$",
        "i",
      )
    case "phone":
      return /^\d+$/g
    case "password":
      return /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])/g
  }
}

export default function AppointmentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [isLoading, setLoading] = useState(false);
    const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch("/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setModal({ isOpen: true, type: "success", message: "Appointment submitted successfully!" });
                reset();
            } else {
                const errorData = await response.json();
                setModal({ isOpen: true, type: "error", message: errorData.message || "Submission failed." });
            }
        } catch (error) {
            setModal({ isOpen: true, type: "error", message: "An unexpected error occurred." });
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setModal({ isOpen: false, type: "", message: "" });
    };


    return (
        <>
            <form
                className={`appointment-formbox ${isLoading ? "_loading" : ""}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content}/>
                <div className="form-field__list appointment-form__list">
                    <div className={`form-field ${errors.firstName ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Your name"
                                className="form-field__input"
                                type="text"
                                {...register("firstName", {required: "Name is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.name ? errors.name.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.phone ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Your phone"
                                className="form-field__input"
                                type="text"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {value: getPattern("phone"), message: "Invalid phone value"},
                                })}
                            />
                        </div>
                        <div className="form-field__error">{errors.phone ? errors.phone.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.email ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Your email"
                                className="form-field__input"
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {value: getPattern("email"), message: "Invalid email value"},
                                })}
                            />
                        </div>
                        <div className="form-field__error">{errors.email ? errors.email.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.date ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Date"
                                className="form-field__input"
                                type="date"
                                {...register("date", {required: "Date is required"})}
                            />
                            <div className="form-field__icon">
                                <SvgIcon name={"calendar"}/>
                            </div>
                        </div>
                        <div className="form-field__error">{errors.date ? errors.date.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.time ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Time"
                                className="form-field__input"
                                type="time"
                                {...register("time", {required: "Time is required"})}
                            />
                            <div className="form-field__icon">
                                <SvgIcon name={"time"}/>
                            </div>
                        </div>
                        <div className="form-field__error">{errors.time ? errors.time.message : ""}</div>
                    </div>

                    <div className="form-field">
                        <div className="form-field__input-wrapp">
                            <div className="form-field__text">
                                <p>WASHINGTON <br /> (253) 981-3049 <br /> 214 Southwest 43rd Street Renton, WA 98057</p>
                            </div>
                            <div className="form-field__icon">
                                <SvgIcon name={"map"}/>
                            </div>
                        </div>
                    </div>

                    <div className={`form-field w-full ${errors.message ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <textarea
                                placeholder="Your message"
                                className="form-field__textarea"
                                {...register("message", {required: "Message is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.message ? errors.message.message : ""}</div>
                    </div>
                </div>

                <div className="appointment-formbottom">
                    <div className="appointment-formbottom__text">We will be glad to meet with you, present our product and find the best solutions for your space.</div>
                    <button type="submit" className={"appointment-form__submit"}>Book <br /> appointment</button>
                </div>
            </form>

            {modal.isOpen && (
                <div className="modal-overlay">
                    <div className={`modal ${modal.type}`}>
                        <p>{modal.message}</p>
                        <button onClick={closeModal} className="modal-close-btn">Close</button>
                    </div>
                </div>
            )}
        </>
    );
}
