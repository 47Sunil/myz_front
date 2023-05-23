const SettingCard = ({ label, img, description, docs }) => {
  return (
    <div className="bg-gray-100 border border-gray-300/50 rounded-xl p-4 ">
      <div className="flex items-center">
        <img src={img} alt={label} className="w-12" />
        <h4 className="text-md text-gray-800">{label}</h4>
      </div>
      <p className="text-gray-600 mt-2 mb-2">{description}</p>
      <div className="mt-2 flex items-center">
        <button className=" px-5 text-sm text-center flex items-center rounded-full bg-white border border-gray-200">
          <span className="text-xl p-2 font-thin">+</span>
          Configure
        </button>
        <a href={docs} className="text-sm text ml-5 cursor-pointer">
          Read Docs
        </a>
      </div>
    </div>
  );
};

export default SettingCard;
