import HomeStoreNavbar from "./HomeStoreNavbar"

export default function Logo() {
    return(
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
    )
}