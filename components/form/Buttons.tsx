"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash, LuPencil } from "react-icons/lu";

type BtnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
   className?: string;
   text?: string;
   size?: BtnSize;
};

type IconBtnAction = "edit" | "delete";

export function SubmitButton({
   className = "",
   text = "submit",
   size = "lg",
}: SubmitButtonProps) {
   const { pending } = useFormStatus();

   return (
      <Button
         type="submit"
         disabled={pending}
         size={size}
         className={`capitalize ${className}`}
      >
         {pending ? (
            <>
               <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
               Please wait...
            </>
         ) : (
            text
         )}
      </Button>
   );
}

export const CardSignInButton = () => {
   return (
      <SignInButton mode="modal">
         <Button
            type="button"
            size="icon"
            variant="outline"
            className="p-2 cursor-pointer"
            asChild
         >
            <FaRegHeart />
         </Button>
      </SignInButton>
   );
};

export const CardSubmitBtn = ({ isFavorite }: { isFavorite: boolean }) => {
   const { pending } = useFormStatus();
   return (
      <Button
         type="submit"
         variant="outline"
         size="icon"
         className="p-2 cursor-pointer"
      >
         {pending ? (
            <ReloadIcon className="animate-spin" />
         ) : isFavorite ? (
            <FaHeart />
         ) : (
            <FaRegHeart />
         )}
      </Button>
   );
};

export const IconButton = ({ actionType }: { actionType: IconBtnAction }) => {
   const { pending } = useFormStatus();

   const renderIcon = () => {
      switch (actionType) {
         case "edit":
            return <LuPencil />;
         case "delete":
            return <LuTrash />;
         default:
            const never: never = actionType;
            throw new Error(`invalid action type ${never}`);
      }
   };
   return (
      <Button
         variant="link"
         type="submit"
         size="icon"
         className="cursor-pointer p-2"
      >
         {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
      </Button>
   );
};
