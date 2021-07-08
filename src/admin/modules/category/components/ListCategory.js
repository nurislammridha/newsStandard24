import React from "react";
import { useHistory } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory";

const ListCategory = () => {
  const history = useHistory();
  return (
    <>
      <div className="">
        <HeaderCategory />
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bangladesh</td>
              <td>
                {/* <a className="btn btn-outline-success btn-sm">
                  <i className="fa fa-eye"></i>
                </a> */}
                <a
                  className="btn btn-outline-primary btn-sm ml-2"
                  onClick={() => history.push("/admin/edit_category/123")}
                >
                  <i className="fa fa-pencil"></i>
                </a>
                <a className="btn btn-outline-danger btn-sm ml-2">
                  <i className="fa fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListCategory;
