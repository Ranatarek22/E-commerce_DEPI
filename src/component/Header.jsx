import React, { useState } from "react";
import { FaBookOpen, FaFolderOpen } from "react-icons/fa";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
  UserIcon 
} from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
// da ta2reban  gahez feeh kol 7aga na2es bas enak tozbot el style t5ale shop w home fe el center 
// 3ayz t8yar fel design tmam da mogarad structure bas

function NavList({ logged, SetLogged, userDetails }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={NavLink}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Home
      </Typography>
      <Typography
        as={NavLink}
        to="/Products"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Shop
      </Typography>

      {logged ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center rounded-full p-0"
            >
              <Avatar
                variant="circular"
                size="md"
                alt="tania andrew"
                withBorder={true}
                color="blue-gray"
                className=" p-0.5"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <Typography
              as="span"
              variant="small"
              className="block text-gray-700 font-medium mb-2"
            >
              Welcome كذا
            </Typography>
          
            {userDetails && userDetails.role == "admin" && (     <Typography
                as={Link}
                to="/admin/"
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                DashBoard
              </Typography>
            )}


            <Typography
              onClick={() => {
                localStorage.clear();
                SetLogged(false);
              }}
              as="h1"
              variant="small"
              className=" text-red-600 hover:text-red-800 font-semibold cursor-pointer mt-2 "
            >
              SignOut
            </Typography>
          </MenuList>
        </Menu>
      ) : (
        <Typography
          as={NavLink}
          to="/Login"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          {localStorage.cn ? "Loading" : "Login"}
        </Typography>
      )}
    </ul>
  );
}
const Header = ({ logged, SetLogged, userDetails }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Navbar className="mx-auto max-w-screen-3xl bg-blue-gray-80 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={NavLink}
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Mazen'z store
        </Typography>
        <div className="hidden lg:block">
          <NavList
            logged={logged}
            SetLogged={SetLogged}
            userDetails={userDetails}
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaBookOpen className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaFolderOpen className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          logged={logged}
          SetLogged={SetLogged}
          userDetails={userDetails}
        />
      </Collapse>
    </Navbar>
  );
};

export default Header;
