import ProductViews from "@/views/Product"
import { productType } from "@/types/product.type"


const ProductPage = (props: {products: productType[] }) => {
    const {products} = props
    return (
        <div>
            <ProductViews products={products}/>
        </div>
    )
}

export default ProductPage;

// Dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();

    return {
        props: {
            products: response.data
        },
    };
}