
export default function Header() {
  return (
    <div className="flex items-center justify-between px-16 py-5 text-white bg-gradient-to-r from-myPurple via-purple-500 to-purple-400">
      <div className="flex items-center">
        <img className="h-6 mr-2 sm:h-8" src="/images/troll-face.png" />
        <h2 className="text-xs sm:text-2xl ">Header component</h2>
      </div>
      <h4 className="text-sm font-medium sm:text-sm ">React Course - Project 3</h4>
    </div>
  );
}
