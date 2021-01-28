import "./index.scss";

function Button({ children, size, isTransperent, type = "button", onClick }) {
  const assignedSize = ["big", "small"].includes(size) ? size : "normal";
  const transparancy = isTransperent ? "content-remove" : "content-add";
  return (
    <button
      onClick={onClick}
      className={`button ${assignedSize} ${transparancy}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
