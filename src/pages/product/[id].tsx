import { useRouter } from "next/router";
import { fetcher } from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduct from "@/views/Detail Product";
import { productType } from "@/types/product.type";

const DetailProductPage = ({product}:{product:productType}) => {
    const {query} = useRouter();
    {/* Client Side Rendering */}
    // const {data, error, isLoading} = useSWR(`/api/product/${query.id}`, fetcher);
    return (
        <div>
            {/* Client Side Rendering */}
            {/* <DetailProduct product={isLoading ? {} : data.data}/> */}

            {/* Server Side Rendering & Static Rendering */}
            <DetailProduct product={product}/>
        </div>
    )
}

// export async function getServerSideProps({params}: {params:{id: string}}) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//     const response = await res.json();

//     return {
//         props: {
//             product: response.data,
//         },
//     };
// }

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();
    const paths = response.data.map((product: productType) => ({
        params: { id: product.id },
    })
    );

    return {
        paths, fallback: false
    }
}


export async function getStaticProps({params}: {params:{id: string}}) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
    const response = await res.json();

    return {
        props: {
            product: response.data
        },
        revalidate: 10
    };
}

export default DetailProductPage;