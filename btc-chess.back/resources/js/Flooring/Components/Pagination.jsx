export default function Pagination({current_page, last_page, onPageChange}) {

    const handlePrev = (e) => {
        e.preventDefault();
        if (current_page > 1) onPageChange(current_page - 1);
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (current_page < last_page) onPageChange(current_page + 1);
    };

    const handleFirst = (e) => {
        e.preventDefault();
        if (current_page !== 1) onPageChange(1);
    };

    const handleLast = (e) => {
        e.preventDefault();
        if (current_page !== last_page) onPageChange(last_page);
    };

  return (
      last_page > 1
              &&
      (<div className="pagination">
          <a href="#" onClick={handleFirst} aria-label="pagination prev link"
             className={`pagination-link ${current_page === 1 ? 'disabled-link' : ''}`}>First</a>
          <a href="#" onClick={handlePrev} aria-label="pagination prev link"
             className={`pagination-link ${current_page === 1 ? 'disabled-link' : ''}`}>Previous</a>
          <ul className={"pagination-pages"}>
              {
                  last_page > 1 &&
                  [...Array(last_page / 2)].map((_, index) => {
                      const page = index + 1;
                      return (
                          <li className="pagination-pages-item" key={index}>
                              <a href="#" aria-label={'pagination link'} key={page}
                                 className={`pagination-page-link`} onClick={(e) => {
                                  e.preventDefault()
                                  onPageChange(page)
                              }}
                              >
                                  {page}
                              </a>
                          </li>
                      );
                  })}
          </ul>
          <a href="#" onClick={handleNext} aria-label="pagination next link" className={`pagination-link ${current_page === last_page ? 'disabled-link' : ''}`}>Next</a>
          <a href="#" onClick={handleLast} aria-label="pagination next link" className={`pagination-link ${current_page === last_page ? 'disabled-link' : ''}`}>Last</a>
      </div>)
  )
}

//
// import React from "react";
//
// const Pagination = ({ current_page, last_page, onPageChange }) => {
//     const handlePrev = () => {
//         if (current_page > 1) onPageChange(current_page - 1);
//     };
//
//     const handleNext = () => {
//         if (current_page < last_page) onPageChange(current_page + 1);
//     };
//
//     const handleFirst = () => {
//         if (current_page !== 1) onPageChange(1);
//     };
//
//     const handleLast = () => {
//         if (current_page !== last_page) onPageChange(last_page);
//     };
//
//
//     return (
//         last_page > 1
//         &&
//         (<div className="flex items-center justify-center gap-2 mt-3">
//
//                 <button className="btn btn-sm btn-dark mx-1" variant="outline" onClick={handleFirst}
//                         disabled={current_page === 1}>
//                     {"<<"}
//                 </button>
//
//                 <button className="btn btn-sm btn-dark mx-1" variant="outline" onClick={handlePrev}
//                         disabled={current_page === 1}>
//                     Prev
//                 </button>
//
//                 {[...Array(last_page / 2)].map((_, index) => {
//                     const page = index + 1;
//                     return (
//                         <button className="btn btn-sm btn-dark mx-1"
//                                 key={page}
//                                 variant={current_page === page ? "default" : "outline"}
//                                 onClick={() => onPageChange(page)}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}
//
//                 <button className="btn btn-sm btn-dark mx-1" variant="outline" onClick={handleNext}
//                         disabled={current_page === last_page}>
//                     Next
//                 </button>
//
//                 <button className="btn btn-sm btn-dark mx-1" variant="outline" onClick={handleLast}
//                         disabled={current_page === last_page}>
//                     {">>"}
//                 </button>
//             </div>
//         )
//     );
// };
//
// export default Pagination;

