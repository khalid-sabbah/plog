// import React from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   //   { name: 'Dashboard', href: '#', current: true },
//   //   { name: 'Team', href: '#', current: false },
//   //   { name: 'Projects', href: '#', current: false },
//   //   { name: 'Calendar', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     window.location.href = '/';
//   };
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-4">
//         <div className="relative flex h-16 items-center justify-between">
//         <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="src\assets\twasol 2024-07-29 153552.png"
//                 className="h-20 w-auto"
//               />
//             </div>
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block h-6 w-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden h-6 w-6 group-data-[open]:block"
//               />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* <button className=" text-white ,text-gray-300 hover  hover:text-white
//                       rounded-md px-3 py-2 text-sm font-medium  ">Login</button>
//             <button className=" text-white ,text-gray-300 hover  hover:text-white
//                       rounded-md px-3 py-2 text-sm font-medium  ">Register</button> */}

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src={`https://i.pravatar.cc/150?u=${user.username}`}
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 {/* <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem> */}
//                 <MenuItem onClick={handleSignOut}>
//                   <a
//                     href="/"
//                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

////////////////////////////////////////////////////////////
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/home">
              <img
                src="src\assets\twasol 2024-07-29 153552.png" // Use your logo's path here
                alt="Your Company"
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={`https://i.pravatar.cc/150?u=${user.username}`}
                    alt=""
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleSignOut}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
