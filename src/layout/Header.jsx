import OpenMainMenu from "./OpenMainMenu";
import HomeStoreNavbar from "./HomeStoreNavbar";
import ProfileCart from "./ProfileCart";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <OpenMainMenu />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://www.logologo.com/logos/abstract-mollusk-sea-shell-free-logo.jpg"
                alt="Your Company"
              />
            </div>
            <HomeStoreNavbar />
          </div>
          <ProfileCart />
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
     <MobileNav/>
    </nav>
  );
}
