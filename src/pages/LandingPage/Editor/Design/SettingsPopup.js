import React from "react";
import { Switch } from "@headlessui/react";
import { useParams } from "react-router";

const SettingsPopup = ({ closeSettingsPopup }) => {
  const { id } = useParams();

  const fbPixelInitialState = {
    pixelId: "",
    trackViewContent: true,
    trackPurchase: false,
    trackLead: false,
  };

  const [changed, setChanged] = React.useState(false);

  const [fbPixel, setFbPixel] = React.useState(fbPixelInitialState);
  const [fbPixelEnabled, setFbPixelEnabled] = React.useState(false);

  const savaMeta = async () => {
    await fetch(`/api/v1/page/updatemeta/${id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fbPixel: fbPixelEnabled ? fbPixel : null,
      }),
    });
    setChanged(false);
  };

  const fbPixelInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setChanged(true);
    if (type === "checkbox") {
      setFbPixel(...fbPixel, { name: checked });
      console.log(value);
    } else
      setFbPixel({
        ...fbPixel,
        [name]: value,
      });
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-50">
        <div className="w-96 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-full h-12 bg-blue-100/20 border-b border-gray-600/10 flex items-center justify-between px-4">
            <div className="text-gray-900 text-sm font-semibold">Settings</div>
            <button
              onClick={() => {
                closeSettingsPopup();
              }}
              className="text-gray-900 font-semibold"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="overflow-y-scroll p-3 max-h-[400px] h-[900px]">
            <div className="bg-gray-100/50 p-3 relative">
              <p className="text-gray-700 text-light text-sm">
                <i className="fab fa-facebook text-blue-600 pr-1"></i> Facebook
                Pixel
              </p>
              <p className="text-gray-700/70 text-light text-xs mt-1">
                Add Facebook Pixel to your Page
              </p>
              <Switch
                checked={fbPixelEnabled}
                onChange={() => {
                  setFbPixelEnabled(!fbPixelEnabled);
                  setChanged(true);
                }}
                className={`${
                  fbPixelEnabled ? "bg-blue-600" : "bg-gray-200"
                } absolute top-2 right-2 inline-flex h-[18px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75}`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    fbPixelEnabled ? "translate-x-14" : "translate-x-0"
                  }
                                pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
                <p
                  className={`${
                    !fbPixelEnabled
                      ? "translate-x-2 text-gray-700/60"
                      : "-translate-x-2 text-white/60"
                  } text-xs transform transition duration-200 ease-in-out`}
                >
                  {fbPixelEnabled ? "Disable" : "Enable"}
                </p>
              </Switch>
              <div
                className={`${
                  fbPixelEnabled ? null : "hidden"
                } mt-3 text-xs text-gray-500`}
              >
                <input
                  type="text"
                  name="pixelId"
                  onChange={(e) => {
                    fbPixelInputChange(e);
                  }}
                  value={fbPixel.pixelId}
                  className="w-full border border-gray-600/10 rounded-md px-3 py-2"
                  placeholder="Enter your Facebook Pixel ID"
                />
                <div className="flex flex-row gap-1 items-center mt-2">
                  <input
                    name="trackViewContent"
                    onChange={(e) => {
                      fbPixelInputChange(e);
                    }}
                    id="TrackViewContent"
                    type="checkbox"
                  ></input>
                  <label for="TrackViewContent">Track ViewContent</label>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <input
                    name="trackLead"
                    onChange={(e) => {
                      fbPixelInputChange(e);
                    }}
                    id="TrackLead"
                    type="checkbox"
                  ></input>
                  <label for="TrackLead">Track Lead</label>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <input
                    name="trackPurchase"
                    onChange={(e) => {
                      fbPixelInputChange(e);
                    }}
                    id="TrackPurchase"
                    type="checkbox"
                  ></input>
                  <label for="TrackPurchase">
                    Track Purchase
                    <span className="text-red-700"> (Not Recommended) </span>
                    <span className="px-1 rounded-full bg-blue-500 text-white">
                      ?
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-gray-200/50 p-3 mt-3 relative">
              <p className="text-gray-700 text-light text-sm">
                <i className="fa-brands fa-searchengin text-blue-600 pr-1"></i>{" "}
                Configure SEO
              </p>
              <p className="text-gray-700/70 text-light text-xs mt-1">
                Add Meta Data to Your Page
              </p>
              <span className="btn-bg text-xs text-white px-3 py-1 rounded-full absolute top-1 right-1">
                Comming Soon
              </span>
            </div>
            <div className="bg-gray-200/50 p-3 mt-3 relative">
              <p className="text-gray-700 text-light text-sm">
                <i className="fa-solid fa-sharp fa-file-code text-blue-600 pr-1"></i>{" "}
                Add Header Scripts
              </p>
              <p className="text-gray-700/70 text-light text-xs mt-1">
                Edit Your Site Head Tag With Custom Scripts
              </p>
              <span className="btn-bg text-xs text-white px-3 py-1 rounded-full absolute top-1 right-1">
                Comming Soon
              </span>
            </div>
            <div className="bg-gray-200/50 p-3 mt-3 relative">
              <p className="text-gray-700 text-light text-sm">
                <i className="fab fa-google text-blue-600 pr-1"></i> Google Ads
                Conversion
              </p>
              <p className="text-gray-700/70 text-light text-xs mt-1">
                Add Google Ads Conversion to your Page
              </p>
              <span className="btn-bg text-xs text-white px-3 py-1 rounded-full absolute top-1 right-1">
                Comming Soon
              </span>
            </div>
            <div className="bg-gray-200/50 p-3 mt-3 relative mb-9">
              <p className="text-gray-700 text-light text-sm">
                <i className="fa-solid fa-code-compare text-blue-600 pr-1"></i>{" "}
                Compare Page
              </p>
              <p className="text-gray-700/70 text-light text-xs mt-1">
                Split Test This Page with Other Pages
              </p>
              <span className="btn-bg text-xs text-white px-3 py-1 rounded-full absolute top-1 right-1">
                Comming Soon
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex flex-row gap-3 bg-white p-3 items-center justify-between h-[50px]">
              <p className="text-blue-600 text-xs text-light ">
                Learn About Page Settings{" "}
                <i className="fas fa-arrow-right ml-2"></i>
              </p>
              <button
                onClick={() => {
                  savaMeta();
                }}
                className={`${
                  changed ? "" : "hidden"
                } text-xs bg-blue-600 px-5 py-1 text-white`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPopup;
