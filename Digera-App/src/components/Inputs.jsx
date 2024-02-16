export const Inputs = ({animated, type, id,placeholder,showLabel}) => {
    return (
      <div className={`col-md-11 m-3  ${animated}`}>
        <div className="form-floating">
          <input
            type={type}
            className="form-control form-control-lg"
            id={id}
            placeholder={placeholder}
          />
          <label htmlFor={id}>{showLabel}</label>
        </div>
      </div>
    );
}
 
