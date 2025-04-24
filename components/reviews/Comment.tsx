"use client";
import { useState } from "react";
import { Button } from "../ui/button";

function Comment({ comment }: { comment: string }) {
   const [isExpand, setIsExpand] = useState(false);

   const longComment = comment.length > 130;
   const displayComment =
      longComment && !isExpand ? `${comment.slice(0, 130)}...` : comment;

   const toggleExpand = () => {
      setIsExpand(!isExpand);
   };

   return (
      <div>
         <p className="text-sm">{displayComment}</p>
         {longComment && (
            <Button
               variant="link"
               className="pl-0 text-muted-foreground"
               onClick={toggleExpand}
            >
               {isExpand ? "Show less" : "Show more"}
            </Button>
         )}
      </div>
   );
}

export default Comment;
