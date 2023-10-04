import "server-only";
import { getProductsFromDb } from "@/services/product.service";
import { cache } from "react";

const getProducts = cache(getProductsFromDb);

export default getProducts;
