// import Form from "react-bootstrap/Form";
import { GiLevelFour } from "react-icons/gi";

const FormComponent = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="p-2 max-w-sm mx-auto bg-transparent rounded-xl shadow-lg flex items-center ">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          <GiLevelFour size={32} />

          <div>
            <div className="text-xl ">repellat voluptates corrupti</div>
            <p className="text-slate-500">magnam veniam voluptatem</p>
          </div>
        </div>

        <input type="text" placeholder="Node Name" className="formInput" />

        <input
          type="text"
          className="formInput"
          placeholder="Dicta Amet Consequatur"
        />
        <input type="text" className="formInput" placeholder="Eas Et Rem" />
        <div className="flex flex-row">
          <input
            type="text"
            className="formInput"
            placeholder="Sit Nihil Expedita"
          />
          <input type="text" className="formInput" placeholder="Rerum" />
        </div>
      </div>
      <div className="p-3">
        <label>sit nihil expedita</label>
        <input type="checkbox" id="custom-switch" />
      </div>
      <div className="flex flex-col p-1">
        <div className="flex flex-col p-2">
          <label>Earum dolorem</label>
          <input type="range" />
        </div>

        <div className="flex flex-col p-2">
          <label>Est Explicabo Dolore</label>
          <input type="range" />
        </div>
        <div className="flex flex-col p-2">
          <label>Optio in Quisquam</label>
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
