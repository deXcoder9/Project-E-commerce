import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiMenuBurger } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export function DrawerDemo() {
  return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-white text-black">
            <CiMenuBurger />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-[200px] top-0">
          <DrawerClose asChild className="flex">
            <button className="text-2xl justify-end mr-6 p-1">
              <GiCrossMark  />
            </button>
          </DrawerClose>
          <div className="mx-auto w-full  ">
            <div>
              <ul className="flex flex-col gap-y-4 text-lg pl-4 mt-6">
                <li>
                  <NavLink>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
  );
}
