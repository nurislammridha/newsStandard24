import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCategoryInput,
  SubmitCategoryInput,
} from "../_redux/categoryAction/CategoryAction";

const AddCategory = () => {
  const dispatch = useDispatch();
  const categoryInput = useSelector(
    (state) => state.categoryInfo.categoryInput
  );
  const isButtonLoader = useSelector(
    (state) => state.categoryInfo.isButtonLoader
  );
  const handleChangeInput = (name, value) => {
    dispatch(GetCategoryInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(SubmitCategoryInput(data));
  };
  return (
    <>
      <h4 className="text-muted">Create A New Category</h4>
      <div className="row mt-3">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12">
              <input
                className="form-control"
                name="categoryName"
                value={categoryInput.categoryName}
                placeholder="Enter Category"
                onChange={(e) =>
                  handleChangeInput("categoryName", e.target.value)
                }
              />
            </div>
            <div className="col-sm-9"> </div>
            <div className="col-sm-2 mt-4">
              {!isButtonLoader && (
                <a
                  className="btn btn-outline-secondary"
                  onClick={() => handleSubmit(categoryInput)}
                >
                  Submit
                </a>
              )}

              {isButtonLoader && (
                <a className="btn btn-outline-secondary">
                  {" "}
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
