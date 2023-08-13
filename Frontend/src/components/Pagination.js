import React from 'react';

import backArrow from "../assets/pics/backArrow.png"
import forwardArrow from "../assets/pics/forwardArrow.png"

import "../assets/css/components/paginationStyle.css"

const Pagination = ({totalPosts, postsPerPage, changePostsPerPage, currentPage, paginate}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const postsPerPageOptions = [10, 15, 20];

    return (
        <nav className="pagination">

            <ul className="pagination__ul">
                <a onClick={() => paginate(currentPage - 1)}
                   href='#ProductsView'
                   className={currentPage === 1 ? "pagination__a--disabled" : "pagination__a"}
                >
                    <li className="pagination__li pagination__li--prevNext">
                        صفحه‌ی قبل
                    </li>
                </a>

                {pageNumbers.map(number => (
                    <a onClick={() => paginate(number)}
                       href='#ProductsView'
                       className={number === currentPage ? 'pagination__a--selected' : 'pagination__a'}
                    >
                        <li
                            className={number === currentPage ? 'pagination__li--selected' : 'pagination__li'}>
                            {number}
                        </li>
                    </a>
                ))}

                <a onClick={() => paginate(currentPage + 1)}
                   href='#ProductsView'
                   className={currentPage === pageNumbers.length ? "pagination__a--disabled" : "pagination__a"}
                >
                    <li className="pagination__li pagination__li--prevNext">
                        صفحه‌ی بعد
                    </li>
                </a>
            </ul>

            <div className="postsPerPage">
                <label htmlFor="cars">تعداد کالا در صفحه: </label>
                <select id="cars" name="carlist" form="carform" onChange={event => changePostsPerPage(event)}>
                    {postsPerPageOptions.map(number => (
                            <option value={number}
                                    selected={number === postsPerPage}>
                                {number}
                            </option>
                        )
                    )}
                </select>
            </div>

        </nav>
    );
};

export default Pagination;