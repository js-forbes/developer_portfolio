export default function NavigationBar() {
  return (
    <nav className="flex p-2 border-b-2  drop-shadow-md shadow-stone-400">
      <div className="flex-none">
        <div className="flex p-1">
          <img
            src="logo"
            alt=""
            srcSet="assets\icon\programming-10817351.png"
            className="max-h-7 mx-4"
          />

          <h1 className="">JSF</h1>
        </div>
      </div>
      <div className="grow"> </div>
      <div className="flex-initial ">
        <ul className="flex align-middle *:px-4 ">
          <a href=""><li>home</li></a>
          <li>blog</li>
          <li>connect</li>
        </ul>
      </div>
    </nav>


  );
}
