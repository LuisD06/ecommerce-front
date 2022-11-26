import { BrandDelete } from "./BrandDelete";
import { BrandForm } from "./BrandForm";
import { BrandList } from "./BrandList";
import { BrandUpdate } from "./BrandUpdate";

export const Brands = () => {
    return (
        <div>
            <BrandList/>
            <BrandForm/>
            <BrandUpdate/>
            <BrandDelete/>
        </div>
    );
}