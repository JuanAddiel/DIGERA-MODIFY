export const CheckBox = ({animated, type, id,showLabel,value}) => {
    return (
      <div className={`col-md-11 m-3 ${animated}`}>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input "
            type={type}
            value={value}
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            {showLabel}
          </label>{" "}
          {/* Usa htmlFor en lugar de for */}
        </div>
      </div>
    );
}
 
