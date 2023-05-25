import React, { useState } from "react";
import BlockContainer from "./BlockContainer";
import TemplateManager from "./TemplateManager";
// import SettingsPopup from "./SettingsPopup";

const LeftSidebar = ({ editor }) => {
  const [openBlocks, setOpenBlocks] = useState(false);
  const [openTempaltes, setOpenTempaltes] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);


  const closeSettingsPopup = () => {
    setOpenSettings(false);
  };

  if (editor) {
    editor.on("canvas:dragover", () => {
      setOpenBlocks(false);
      setOpenTempaltes(false);
    });
  }


  return (
    <>
      <div
        className=" flex flex-col items-between justify-between"
        id="left-sidebar"
        style={{
          width: "51px",
          height: "calc(100vh - 50px)",
          background: "#111115",
        }}
      >
        <div className="gap-5">
          <button
            onClick={() => {
              setOpenBlocks(openBlocks ? false : true);
              setOpenTempaltes(false);
            }}
            className="w-full flex items-center justify-center "
            style={{ height: "50px" }}
          >
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.863 11.2676V19.1107" stroke="white" />
              <path d="M17.3488 15.13H25" stroke="white" />
              <rect
                x="11.4919"
                y="0.5"
                width="7.51873"
                height="7.73239"
                rx="1.5"
                stroke="#717179"
              />
              <rect
                x="4.89679"
                y="11.7676"
                width="7.51873"
                height="7.73239"
                rx="1.5"
                stroke="#717179"
              />
              <rect
                x="0.5"
                y="0.5"
                width="7.51873"
                height="7.73239"
                rx="1.5"
                stroke="#717179"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setOpenTempaltes(openTempaltes ? false : true);
              setOpenBlocks(false);
            }}
            className="w-full flex items-center justify-center "
            style={{ height: "50px" }}
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17.4706H4.52941M8.05882 17.4706H4.52941M4.52941 17.4706V13.9412M4.52941 17.4706V21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5974 21H18.068C19.0426 21 19.8327 20.2099 19.8327 19.2353V5.41003C19.8327 5.22282 19.7584 5.04328 19.626 4.91089L15.9218 1.20675C15.7894 1.07436 15.6099 1 15.4227 1H3.95037C2.97575 1 2.18567 1.79008 2.18567 2.7647V10.4118"
                stroke="#717179"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.1268 5V1.41594C15.1268 1.18622 15.3131 1 15.5428 1C15.6531 1 15.7588 1.04382 15.8369 1.12182L19.7108 4.99582C19.7889 5.07382 19.8327 5.17962 19.8327 5.28994C19.8327 5.51966 19.6465 5.70588 19.4167 5.70588H15.8327C15.4428 5.70588 15.1268 5.38984 15.1268 5Z"
                fill="#696969"
                stroke="#787575"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={openBlocks ? "block" : "hidden"}>
          <BlockContainer editor={editor} />
        </div>

        <div className={openTempaltes ? "block" : "hidden"}>
          <TemplateManager editor={editor} />
        </div>

        <div className={openSettings ? "block" : "hidden"}>
          {/* <SettingsPopup closeSettingsPopup={closeSettingsPopup} /> */}
        </div>

        <button
          onClick={() => {
            setOpenSettings(true);
          }}
          className="w-full flex items-center justify-center "
          style={{ height: "50px" }}
        >
          <svg
            width="21"
            height="22"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.4999 56.9886C50.7079 56.9886 57.3616 50.502 57.3616 42.5C57.3616 34.4981 50.7079 28.0114 42.4999 28.0114C34.2921 28.0114 27.6383 34.4981 27.6383 42.5C27.6383 50.502 34.2921 56.9886 42.4999 56.9886ZM42.4999 47.3295C45.236 47.3295 47.4538 45.1675 47.4538 42.5C47.4538 39.8325 45.236 37.6705 42.4999 37.6705C39.7641 37.6705 37.546 39.8325 37.546 42.5C37.546 45.1675 39.7641 47.3295 42.4999 47.3295Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.8568 3.34162L56.4504 14.7361C57.7471 15.3566 58.9939 16.0608 60.1836 16.8415L71.1068 12.4882C72.9413 11.757 75.0477 12.4595 76.0389 14.1327L84.4688 28.3673C85.4596 30.0406 85.0304 32.1702 83.4638 33.3535L74.133 40.4005C74.1806 41.0944 74.2048 41.7945 74.2048 42.5C74.2048 43.2055 74.1806 43.9056 74.133 44.5995L83.4638 51.6464C85.0304 52.8298 85.4596 54.9595 84.4688 56.6328L76.0389 70.8672C75.0477 72.5405 72.9413 73.2429 71.1068 72.512L60.1836 68.1584C58.9939 68.9393 57.7471 69.6436 56.4504 70.2637L54.8568 81.6583C54.5889 83.5728 52.9117 85 50.9298 85H34.07C32.0882 85 30.411 83.5728 30.1432 81.6583L28.5494 70.2637C27.2527 69.6436 26.0059 68.9393 24.8163 68.1584L13.893 72.512C12.0586 73.2429 9.95215 72.5405 8.96121 70.8672L0.531261 56.6328C-0.459677 54.9595 -0.0304311 52.8298 1.53627 51.6464L10.867 44.5995C10.8193 43.9056 10.7951 43.2055 10.7951 42.5C10.7951 41.7945 10.8193 41.0944 10.867 40.4005L1.53627 33.3535C-0.0304311 32.1702 -0.459677 30.0406 0.531222 28.3673L8.96121 14.1327C9.95211 12.4595 12.0585 11.757 13.893 12.4882L24.8163 16.8415C26.0059 16.0608 27.2527 15.3566 28.5494 14.7361L30.1432 3.34162C30.411 1.42723 32.0882 0 34.07 0H50.9298C52.9117 0 54.5889 1.42723 54.8568 3.34162ZM47.3467 21.14L52.0854 23.4072C52.9751 23.833 53.832 24.3168 54.6507 24.8541L59.0375 27.7333L70.053 23.3433L73.2936 28.8158L63.8943 35.9148L64.2474 41.0469C64.2803 41.526 64.297 42.0101 64.297 42.5C64.297 42.9899 64.2803 43.4744 64.2474 43.9531L63.8943 49.0852L73.2936 56.1842L70.053 61.6567L59.0375 57.2668L54.6507 60.146C53.832 60.683 52.9751 61.1672 52.0854 61.5929L47.3467 63.8601L45.7409 75.3409H39.2592L37.6533 63.8601L32.9146 61.5929C32.0248 61.1672 31.168 60.683 30.3494 60.146L25.9624 57.2668L14.9471 61.6567L11.7062 56.1842L21.1057 49.0852L20.7526 43.9531C20.7197 43.474 20.7028 42.9899 20.7028 42.5C20.7028 42.0101 20.7197 41.526 20.7526 41.0469L21.1057 35.9148L11.7061 28.8158L14.9471 23.3433L25.9624 27.7333L30.3494 24.854C31.168 24.3168 32.0248 23.833 32.9146 23.4072L37.6533 21.14L39.2592 9.65909H45.7409L47.3467 21.14Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default LeftSidebar;
