import React from "react";
import { useHistory } from "react-router-dom";
import HeaderNews from "../components/HeaderNews";

const ListNews = () => {
  const history = useHistory();
  return (
    <>
      <div className="">
        <HeaderNews />
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Writter</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Is Publish</th>
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
              <td>
                <a className="btn btn-primary btn-sm">ACTIVE</a>
              </td>
              <td>
                <a className="btn btn-outline-success btn-sm">
                  <i className="fa fa-eye"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-sm ml-2"
                  onClick={() => history.push("/admin/edit_news/123")}
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

export default ListNews;
