import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];

}

export default function ProductList({ products }: Props) {
    return (
        <Grid2 container spacing={4}>
            {products.map((product) => (
                <Grid2 key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </Grid2>
            ))}
        </Grid2>
    )
}