import React from "react";
import { useHistory } from "react-router-dom";
import HeaderWritter from "../components/HeaderWritter";

const ListWritter = () => {
  const history = useHistory();
  return (
    <>
      <div className="">
        <HeaderWritter />
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Division</th>
              <th scope="col">District</th>
              <th scope="col">Address</th>
              <th scope="col">Is Active</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bangladesh</td>
              <td>Ban</td>
              <td>Ban</td>
              <td>Ban</td>
              <td>Ban</td>
              <td>Ban</td>
              <td>
                <a className="btn btn-primary btn-sm">ACTIVE</a>
              </td>
              <td>
                {/* <a className="btn btn-outline-success btn-sm">
                  <i className="fa fa-eye"></i>
                </a> */}
                <a
                  className="btn btn-outline-primary btn-sm ml-2"
                  onClick={() => history.push("/admin/edit_writter/123")}
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

export default ListWritter;
