import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "./ui/button";
interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  buttonText: string;
  handleClick?: () => void;

  image?: string;
  buttonIcon?: string;
}

const MeetingModals = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  buttonText,
  handleClick,

  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="flex text-white w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl text-center font-bold leading-[42px]")}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="image"
                width={13}
                height={13}
              ></Image>
            )}
            {buttonText || "Scedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModals;
