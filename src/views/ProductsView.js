import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";

import sampleProducts from "../assets/data/SampleProducts";

import "../assets/css/views/productsViewStyle.css"
import Pagination from "../components/Pagination";

function ProductsView(props) {
    const [products, setProducts] = useState(sampleProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Change postsPerPage
    // const changePostsPerPage = postsPerPage => setPostsPerPage(postsPerPage);
    const changePostsPerPage = event => {
        console.log(event.target.value);
        setPostsPerPage(event.target.value)
    }

    return (
        <div className="productsView" name="#ProductsView">
            {currentPosts.map((product, index) => (
                <ProductCard product={product}/>
            ))}
            <Pagination totalPosts={products.length}
                        postsPerPage={postsPerPage}
                        changePostsPerPage={changePostsPerPage}
                        currentPage={currentPage}
                        paginate={paginate}
            />

        </div>
    );
}

export default ProductsView;