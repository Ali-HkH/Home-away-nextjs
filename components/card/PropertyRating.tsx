import { fetchPropertyRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";

async function PropertyRating({
   propertyId,
   inPage,
}: {
   propertyId: string;
   inPage: boolean;
}) {
   const { count, rating } = await fetchPropertyRating(propertyId);

   const className = `flex gap-1 items-center ${
      inPage ? "text-md" : "text-xs"
   }`;
   const countText = count > 1 ? "reviews" : "review";
   const countValue = `(${count}) ${inPage ? countText : ""}`;

   if (count === 0) return null;
   return (
      <span className={className}>
         <FaStar className="w-3 h-3" />
         {rating} {countValue}
      </span>
   );
}

export default PropertyRating;
