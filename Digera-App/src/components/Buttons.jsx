export const Buttons = ({text}) => {
    return (
      <div className="col-md-11">
        <button
          className="btn btn-success w-100 py-2 animate__animated animate__zoomIn"
          type="submit"
        >
          {text}
        </button>
      </div>
    );
}
 