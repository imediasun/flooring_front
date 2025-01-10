export default function SecondaryBtn({className = "", type= "button", children, ...props }) {
  return (
    <button
      type={type}
      className={"secondary-btn " + className}
      {...props}
    >
      <span className="holder">
        {children}
      </span>
    </button>
  )
}
