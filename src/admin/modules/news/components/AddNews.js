import React, { useEffect } from "react";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryOption,
  GetNewsInput,
  GetNewsList,
  NewsOption,
  SubmitNewsInput,
  WritterOption,
} from "../_redux/newsAction/NewsAction";
import {
  GetCategoryList,
  SubmitCategoryInput,
} from "../../category/_redux/categoryAction/CategoryAction";
import { GetWritterList } from "../../writter/_redux/writterAction/WritterAction";

const AddNews = () => {
  const dispatch = useDispatch();
  const newsInput = useSelector((state) => state.newsInfo.newsInput);
  const categoryList = CategoryOption(
    useSelector((state) => state.categoryInfo.categoryList)
  );
  const writterList = WritterOption(
    useSelector((state) => state.writterInfo.writterList)
  );
  const newsList = NewsOption(useSelector((state) => state.newsInfo.newsList));
  const isButtonLoader = useSelector((state) => state.newsInfo.isButtonLoader);
  const isLoadNews = useSelector((state) => state.newsInfo.isLoadNews);
  const handleChangeInput = (name, value, e) => {
    dispatch(GetNewsInput(name, value, e));
  };
  const handleSubmit = (data) => {
    dispatch(SubmitNewsInput(data));
  };

  useEffect(() => {
    dispatch(GetCategoryList());
    dispatch(GetWritterList());
    dispatch(GetNewsList());
  }, []);
  return (
    <>
      <h3 className="text-muted">Add a News</h3>
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
            options={categoryList}
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
            options={writterList}
            name="writterId"
            value={{ label: newsInput.writterName }}
            onChange={(e) => {
              handleChangeInput("writterId", e.value);
              handleChangeInput("writterName", e.label);
            }}
          />
        </div>
        <div className="col-sm-2 mt-2">Releted News</div>
        <div className="col-sm-4 mt-2">
          <Select
            isMulti
            name="reletedNews"
            options={newsList}
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
              handleChangeInput("thumbnailImage", e.target.files[0], e)
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
            id="file-upload2"
            name="featureImage"
            onChange={(e) =>
              handleChangeInput("featureImage", e.target.files[0], e)
            }
          />
        </div>
        <div className="col-sm-4 mt-2">
          Upload Image
          <label
            for="file-upload2"
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
        <div className="col-sm-2"> </div>
        <div className="col-sm-1 mt-4">
          {/* {!isLoadNews && ( */}
          <a
            className="btn btn-outline-secondary"
            onClick={() => handleSubmit(newsInput)}
          >
            Submit
          </a>
          {/* )} */}

          {/* {isLoadNews && (
            <a className="btn btn-outline-secondary">
              {" "}
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting
            </a>
          )} */}
        </div>
      </div>
    </>
  );
};

export default AddNews;
