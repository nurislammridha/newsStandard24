import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  CategoryDelete,
  FalseCategoryDeleted,
  GetCategoryList,
  SetCategoryUpdate,
} from "../_redux/categoryAction/CategoryAction";

const ListCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryInfo.categoryList);
  const isCategoryLoader = useSelector(
    (state) => state.categoryInfo.isCategoryLoader
  );
  const isCategoryDeleted = useSelector(
    (state) => state.categoryInfo.isCategoryDeleted
  );
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  const handleEdit = (data) => {
    dispatch(SetCategoryUpdate(data));
    history.push(`/admin/edit_category/${data._id}`);
  };
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this category?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(CategoryDelete(id)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  useEffect(() => {
    if (isCategoryDeleted) {
      dispatch(GetCategoryList());
      dispatch(FalseCategoryDeleted());
    }
  }, [isCategoryDeleted]);
  return (
    <>
      <div className="">
        <HeaderCategory />
        {isCategoryLoader && (
          <>
            <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}

        {!isCategoryLoader && categoryList && categoryList.length === 0 && (
          <>
            <div class="alert alert-success text-center mt-5 mt-5" role="alert">
              Sorry ! No data found.
            </div>
          </>
        )}
        {!isCategoryLoader &&
          categoryList &&
          categoryList !== null &&
          categoryList.length > 0 && (
            <table class="table table-striped mt-3">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categoryList.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.categoryName}</td>
                    <td>
                      {/* <a className="btn btn-outline-success btn-sm">
                  <i className="fa fa-eye"></i>
                </a> */}
                      <a
                        className="btn btn-outline-primary btn-sm ml-2"
                        onClick={() => handleEdit(item)}
                      >
                        <i className="fa fa-pencil"></i>
                      </a>
                      <a
                        className="btn btn-outline-danger btn-sm ml-2"
                        onClick={() => handleDelete(item._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </>
  );
};

export default ListCategory;
