import React, { useEffect } from "react";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseNewsUpdate,
  GetNewsInput,
  UpdateNewsInput,
} from "../_redux/newsAction/NewsAction";
const EditNews = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const newsInput = useSelector((state) => state.newsInfo.newsInput);
  const isButtonLoader = useSelector((state) => state.newsInfo.isButtonLoader);
  const isNewsUpdate = useSelector((state) => state.newsInfo.isNewsUpdate);
  const handleChangeInput = (name, value) => {
    dispatch(GetNewsInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(UpdateNewsInput(data, id));
  };
  useEffect(() => {
    if (isNewsUpdate) {
      history.push("/admin/news");
      dispatch(FalseNewsUpdate());
    }
  }, [isNewsUpdate]);
  const options = [
    { label: "test", value: "test" },
    { label: "test2", value: "test2" },
  ];
  return (
    <>
      <h3 className="text-muted">Update News</h3>
      <div className="row">
        <div className="col-sm-2">News Title</div>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="text"
            name="newsTitle"
            value={newsInput.newsTitle}
            onChange={(e) => handleChangeInput("newsTitle", e.target.value)}
          />
        </div>
        <div className="col-sm-2">Category</div>
        <div className="col-sm-4">
          <Select
            options={options}
            name="categoryId"
            value={{ label: newsInput.categoryName }}
            onChange={(e) => {
              handleChangeInput("categoryId", e.value);
              handleChangeInput("categoryName", e.label);
            }}
          />
        </div>
        <div className="col-sm-2 mt-2">Writter</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={options}
            name="writterId"
            value={{ label: newsInput.writterName }}
            onChange={(e) => {
              handleChangeText("writterId", e.value);
              handleChangeText("writterName", e.label);
            }}
          />
        </div>
        <div className="col-sm-2 mt-2">Releted News</div>
        <div className="col-sm-4 mt-2">
          <Select
            isMulti
            name="reletedNews"
            options={options}
            value={newsInput.reletedNews}
            onChange={(e) => handleChangeInput("reletedNews", e)}
          />
        </div>
        <div className="col-sm-2 mt-2">Thumbnail Image</div>
        <div className="col-sm-4 d-none">
          <input
            className="form-conrol"
            autoComplete="off"
            type="file"
            accept="image/*"
            id="file-upload"
            name="thumbnailImage"
            onChange={(e) =>
              handleChangeInput("thumbnailImage", e.target.files[0])
            }
          />
        </div>
        <div className="col-sm-4 mt-2">
          Upload Image
          <label
            for="file-upload"
            className="btn btn-outline-warning ml-3 mr-3"
            style={{ fontSize: "15px" }}
          >
            <i class="fa fa-upload"></i>
          </label>
          <img src={newsInput.thumbnailImagePreview} width="130" />
        </div>
        <div className="col-sm-2 mt-2">Feature Image</div>
        <div className="col-sm-4 d-none">
          <input
            className="form-conrol"
            autoComplete="off"
            type="file"
            accept="image/*"
            id="file-upload"
            name="featureImage"
            onChange={(e) =>
              handleChangeInput("featureImage", e.target.files[0])
            }
          />
        </div>
        <div className="col-sm-4 mt-2">
          Upload Image
          <label
            for="file-upload"
            className="btn btn-outline-warning ml-3 mr-3"
            style={{ fontSize: "15px" }}
          >
            <i class="fa fa-upload"></i>
          </label>
          <img src={newsInput.featureImagePreview} width="130" />
        </div>
        <div className="col-sm-2 mt-2">Full News</div>
        <div className="col-sm-10 mt-2">
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
            name="productFullDescription"
            editorState={newsInput.fullDescription}
            onEditorStateChange={(e) => handleChangeInput("fullDescription", e)}
          />
        </div>
        <div className="col-sm-9"> </div>
        <div className="col-sm-2 mt-4">
          {!isButtonLoader && (
            <a
              className="btn btn-outline-secondary"
              onClick={() => handleSubmit(newsInput)}
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
    </>
  );
};

export default EditNews;
