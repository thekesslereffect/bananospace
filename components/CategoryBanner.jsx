import Link from "next/link";
import CategoryLink from "./CategoryLink";
import { categoryMapping } from "../utils";

const CategoryBanner = () => {
    return (
        <div className="w-full mb-16 overflow-x-auto">
            <div className="flex space-x-4">
                {/* Loop through categories and create links for each one */}
                {Object.keys(categoryMapping).map((categoryName, index) => (
                    <div key={index} className="shrink-0"> {/* Added a wrapper with shrink-0 */}
                        <CategoryLink categoryName={categoryName} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBanner;
