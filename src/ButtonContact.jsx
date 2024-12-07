export default function ButtonContact({
    link = "",
    displayLink = "",
    linkTips = "",
    imgPath = "",
    actionIconPath = "",
  }) {
 
return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-300 rounded-2xl p-2 text-center my-button
      hover:bg-gray-200 mb-1"
      title={linkTips}
    >
      <div className="flex items-center">
        <img src={imgPath} alt={displayLink} className="max-h-9 mx-10 justify-start" />
        <p className="text-lg font-medium align-middle text-gray-200">{displayLink}</p>
        <img src={actionIconPath} alt={""} className="max-h-6 mx-6" />

      </div>
    </a>
  );
  }
  