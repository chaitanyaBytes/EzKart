"use client";

import { useState } from "react";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./Filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 bg-black text-white rounded-full hover:bg-black hover:opacity-80 lg:hidden"
      >
        Filters
        <PlusIcon size={20} />
      </Button>

      <Dialog
        onClose={onClose}
        open={open}
        className={"relative z-40 lg:hidden"}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            className={
              "relative ml-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={20} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
              <Filter valueKey={"colorId"} name={"Color"} data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
