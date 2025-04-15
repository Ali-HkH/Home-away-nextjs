import LoadingCard from "@/components/card/LoadingCard";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

function HomePage({
   searchParams,
}: {
   searchParams: { category?: string; search?: string };
}) {
   return (
      <div>
         <CategoriesList
            category={searchParams.category}
            search={searchParams.search}
         />
         <Suspense fallback={<LoadingCard />}>
            <PropertiesContainer
               category={searchParams.category}
               search={searchParams.search}
            />
         </Suspense>
      </div>
   );
}

export default HomePage;
