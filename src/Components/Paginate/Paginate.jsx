import React from "react";
import { AiFillCaretRight, AiFillCaretLeft,AiOutlineEllipsis } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import './paginate.css'
const PaginationItem = ({ onPageChange }) => {
  return (
    <div className="paginateParent">
      <ReactPaginate
        pageCount={500}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        previousLabel={<AiFillCaretLeft size={20} />}
        nextLabel={<AiFillCaretRight size={20} />}
        breakLabel={<AiOutlineEllipsis size={20} />}
        // breakLabel={null}
        previousLinkClassName="btn btn-danger  p-2 text-decoration-none rounded-circle "
        nextLinkClassName="btn btn-danger p-2 text-decoration-none rounded-circle"
        breakClassName="p-2 text-light"
        pageClassName="btn btn-outline-light border-0 p-2 "
        activeClassName="text-danger fw-bold"
        className="d-flex justify-content-center bg-transpernt mt-10 align-items-center list-unstyled p-2 w-100 gap-1"
        onPageChange={onPageChange}
        onPageActive={(data) => console.log(data, "active")}
      />
    </div>
  );
};

export default PaginationItem;