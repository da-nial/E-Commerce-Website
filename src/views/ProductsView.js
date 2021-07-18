import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";

import sampleProducts from "../assets/data/SampleProducts";

import "../assets/css/views/productsViewStyle.css"
import Pagination from "../components/Pagination";

function ProductsView(props) {
    const [products, setProducts] = useState(sampleProducts);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         setPosts(res.data);
    //         setLoading(false);
    //     };
    //
    //     fetchPosts();
    // }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="productsView">
            {products.map((product, index) => (
                <ProductCard product={product}/>
            ))}
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={products.length}
                        paginate={paginate}
            />
        </div>
    );
}

export default ProductsView;