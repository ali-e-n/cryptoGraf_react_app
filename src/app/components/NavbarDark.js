"use client"; // Add this line if using the Next.js App Router in the `app` directory

import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export function NavbarDark(props) {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl bg-slate-700 px-4 py-3 rounded-md "
    >
      <div className="flex flex-wrap items-center justify-center  text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-xl"
        >
          <em>{props.title} </em>
        </Typography>
        <div className="ml-auto gap-3 md:mr-4 relative">
          <div className="flex w-full items-center justify-between gap-8 md:w-max ">
            <Input
              type="search"
              color="white"
              placeholder="  Type here..."
              className="hidden md:pr-20 md:rounded-md  md:p-1 md:flex "
              containerProps={{
                className: "min-w-[288px] p-2 text-xl rounded text-black",
              }}
            />
            <Button
              size="sm"
              color="white"
              className=" rounded text-white  bg-slate-600 hover:bg-slate-700 absolute top-3 right-32  text-lg "
            >
              Search
            </Button>
            <IconButton variant="text" color="white" className="ml-auto pb-5">
              <Cog6ToothIcon className="h-7 w-7 " />
            </IconButton>
            <IconButton variant="text" color="white" className="ml-auto pb-5">
              <BellIcon className="h-7 w-7" />
            </IconButton>
            <IconButton variant="text" color="white" className="ml-auto pb-5">
              <UserCircleIcon className="h-7 w-7 " />
            </IconButton>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarDark;
