import { useSession } from "next-auth/react";
import React from "react";

const Header: React.FC = () => {

  return (
    <header className="bg-indigo-900">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between bg-indigo-900 py-6">
          <div className="flex items-center">
            {/*Logo*/}
            <a href="http://localhost:3000">
              <span className="sr-only">Your Company</span>
              <svg className="fill-neutral-100 h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M467.14 44.84c-62.55-62.48-161.67-64.78-252.28 25.73-78.61 78.52-60.98 60.92-85.75 85.66-60.46 60.39-70.39 150.83-63.64 211.17l178.44-178.25c6.26-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.6 9.37 33.98 0l66.1-66.03C159.42 454.65 279 457.11 353.95 384h-98.19l147.57-49.14c49.99-49.93 36.38-36.18 46.31-46.86h-97.78l131.54-43.8c45.44-74.46 34.31-148.84-16.26-199.36z" />
              </svg>
              {/*<img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />*/}
            </a>

            <div className="ml-8 space-x-8 lg:block">
              <a href="http://localhost:3000">
                <h1 className=" text-4xl font-bold text-neutral-100">
                  Easy Note
                </h1>
              </a>
            </div>
          </div>

          <div className="ml-10 space-x-4">
            <UserImage />
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header;

const UserImage: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    sessionData ?
      <button className="w-12" type="button">
        <img className="max-w-full h-auto rounded-full" src={sessionData && sessionData.user && sessionData.user.image ? sessionData.user.image : ""} alt="User" />
      </button> :

      <button type="button">
        <svg className="fill-neutral-100 h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
        </svg>
      </button>
  );
}


