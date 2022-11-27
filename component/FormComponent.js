// import Form from "react-bootstrap/Form";
import { GiLevelFour } from "react-icons/gi";

const FormComponent = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="cardInSideBar">
          <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
              {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
              <GiLevelFour size={32} />
            </div>
            <div>
              <div class="text-xl ">repellat voluptates corrupti</div>
              <p class="text-slate-500">magnam veniam voluptatem</p>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Node Name" className="formInput" />

        <input
          type="text"
          className="formInput"
          placeholder="Dicta Amet Consequatur"
        />
        <input type="text" className="formInput" placeholder="Eas Et Rem" />
        <input
          type="text"
          className="formInput"
          placeholder="Sit Nihil Expedita"
        />
        <input type="text" className="formInput" placeholder="Rerum" />
      </div>
      <div className="p-3 m-3">
        <label>sit nihil expedita</label>
        <input type="checkbox" id="custom-switch" />
      </div>
      <div className="flex flex-col space-y-4 m-2 p-2">
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
