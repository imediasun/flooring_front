import SecondaryBtn from "@/PapaCarlo/Components/SecondaryBtn";
import { SelectField } from "@/PapaCarlo/Components/SelectField";
import SvgIcon from "@/PapaCarlo/Components/SvgIcon";
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
        reset,
        setValue,
    } = useForm();

    const [isLoading, setLoading] = useState(false);
    const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });
    const [specialist, setSpecialist] = useState("");

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
                setSpecialist("");
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

    const onChangeSelectHandle = (name, value) => {
        setSpecialist(value);
        setValue(name, value); // Синхронизируем выбор с react-hook-form
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
                                placeholder="First name"
                                className="form-field__input"
                                type="text"
                                {...register("firstName", {required: "First name is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.firstName ? errors.firstName.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.lastName ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Last name"
                                className="form-field__input"
                                type="text"
                                {...register("lastName", {required: "Last name is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.lastName ? errors.lastName.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.email ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Email"
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

                    <div className={`form-field ${errors.phone ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Phone number"
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

                    <div className={`form-field ${errors.date ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <input
                                placeholder="Date"
                                className="form-field__input"
                                type="date"
                                {...register("date", {required: "Date is required"})}
                            />
                            <div className="form-field__icon">
                                <SvgIcon name={"calendar-v2"}/>
                            </div>
                        </div>
                        <div className="form-field__error">{errors.date ? errors.date.message : ""}</div>
                    </div>

                    <div className={`form-field ${errors.specialist ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <SelectField
                                items={["specialist1", "specialist2", "specialist3"]}
                                value={specialist}
                                name="specialist" // Явно передаем имя поля
                                holder={"Specialist"}
                                onChangeForm={onChangeSelectHandle}
                                {...register("specialist", {required: "Specialist is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.specialist ? errors.specialist.message : ""}</div>
                    </div>

                    <div className={`form-field w-full ${errors.message ? "_invalid" : ""}`}>
                        <div className="form-field__input-wrapp">
                            <textarea
                                placeholder="How can we help?"
                                className="form-field__textarea"
                                {...register("message", {required: "Message is required"})}
                            />
                        </div>
                        <div className="form-field__error">{errors.message ? errors.message.message : ""}</div>
                    </div>
                </div>
                <SecondaryBtn type={"submit"} className={"appointment-form__submit"}>
                    Submit
                </SecondaryBtn>
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
