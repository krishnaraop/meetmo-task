// import Form from "react-bootstrap/Form";
import { GiLevelFour } from "react-icons/gi";

const FormComponent = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="p-2 max-w-sm mx-auto bg-transparent rounded-xl shadow-lg flex items-center gap-2">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          <GiLevelFour size={32} color="blue" />

          <div>
            <div className="text-xl ">repellat voluptates corrupti</div>
            <p className="text-white-500">magnam veniam voluptatem</p>
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
          <label className="flex flex-row">
            <p className="basis-2/3">Earum dolorem</p>
            <p className="basis-1/3">54mbps</p>
          </label>
          <input type="range" />
        </div>

        <div className="flex flex-col p-2">
          <label className="flex flex-row">
            <p className="basis-2/3">Est Explicabo Dolore</p>
            <p className="basis-1/3">764ms</p>
          </label>
          <input type="range" />
        </div>
        <div className="flex flex-col p-2">
          <label className="flex flex-row">
            <p className="basis-2/3">Optio in Quisquam</p>
            <p className="basis-1/3">432ms</p>
          </label>
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
