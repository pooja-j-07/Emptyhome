import React from 'react';
const Pagination =({postsperpage, totalposts})=>{
    const pagenumbers=[];
    for(let i=1; i<=Math.ceil(totalposts/postsperpage); i++){
        pagenumbers.push(i);
    }
    return(
        <nav>
        <ul className="Pagination">
            {pagenumbers.map(number=>(
                <li key={number} className="pagesitems">
                    <a href='!#' className="pagelinks">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    )
}
export default Pagination;