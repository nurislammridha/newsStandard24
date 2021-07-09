import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  FalseCategoryUpdate,
  GetCategoryInput,
  UpdateCategoryInput,
} from "../_redux/categoryAction/CategoryAction";

const EditCategory = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryInput = useSelector(
    (state) => state.categoryInfo.categoryInput
  );
  const isButtonLoader = useSelector(
    (state) => state.categoryInfo.isButtonLoader
  );
  const isCategoryUpdate = useSelector(
    (state) => state.categoryInfo.isCategoryUpdate
  );
  const handleChangeInput = (name, value) => {
    dispatch(GetCategoryInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(UpdateCategoryInput(data, id));
  };
  useEffect(() => {
    if (isCategoryUpdate) {
      history.pushState("/admin/category");
      dispatch(FalseCategoryUpdate());
    }
  }, [isCategoryUpdate]);
  return (
    <>
      <h4 className="text-muted">Update Category</h4>
      <div className="row mt-3">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12">
              <input
                className="form-control"
                name="categoryName"
                value={categoryInput.categoryInput}
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
                  Update
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
                  Updatting
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
