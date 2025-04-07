import React from "react";
import { LuUser } from "react-icons/lu";
import { fetchProfileImg } from "@/utils/actions";

async function UserIcon() {
   const profileImg = await fetchProfileImg()

   if(profileImg) {
      return <img src={profileImg} alt="profile-img" className="w-6 h-6 rounded-full object-cover" />
   }

   return <LuUser  className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
