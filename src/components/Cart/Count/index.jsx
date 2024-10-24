import "./style.scss";
import UpImg from "../../../img/icons/icon-up.svg";
import DownImg from "../../../img/icons/icon-down.svg";
const Count = ({ count, increase, id, decrease, changeValue }) => {
    return (
        <div className="count">
            <div className="count__box">
                <input
                    type="number"
                    className="count__input"
                    onChange={(e) => {
                        changeValue(id, +e.target.value);
                    }}
                    min="1"
                    max="100"
                    value={count}
                />
            </div>
            <div className="count__controls">
                <button type="button" className="count__up">
                    <img
                        src={UpImg}
                        alt="Increase"
                        onClick={() => increase(id)}
                    />
                </button>
                <button type="button" className="count__down">
                    <img
                        src={DownImg}
                        alt="Decrease"
                        onClick={() => decrease(id)}
                    />
                </button>
            </div>
        </div>
    );
};

export default Count;
