import React from "react";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddNews = () => {
  const options = [
    { label: "test", value: "test" },
    { label: "test2", value: "test2" },
  ];
  return (
    <>
      <h3 className="text-muted">Add a News</h3>
      <div className="row">
        <div className="col-sm-2">News Title</div>
        <div className="col-sm-4">
          <input className="form-control" />
        </div>
        <div className="col-sm-2">Category</div>
        <div className="col-sm-4">
          <Select
            options={options}
            name="city"
            // value={{ label: confirmInput.city }}
            // onChange={(e) => handleChangeText("city", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Writter</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={options}
            name="city"
            // value={{ label: confirmInput.city }}
            // onChange={(e) => handleChangeText("city", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Releted News</div>
        <div className="col-sm-4 mt-2">
          <Select
            isMulti
            name="productCategory"
            options={options}
            //   value={productInput.productCategory}
            //   onChange={(e) => handleChangeInput("productCategory", e)}
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
            name="featureImg"
            // onChange={(e) =>
            //   handleChangeInput("featureImg", e.target.files[0])
            // }
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
          {/* <img src={barndInput.imagePreviewUrl} width="130" /> */}
        </div>
        <div className="col-sm-2 mt-2">Feature Image</div>
        <div className="col-sm-4 d-none">
          <input
            className="form-conrol"
            autoComplete="off"
            type="file"
            accept="image/*"
            id="file-upload"
            name="featureImg"
            // onChange={(e) =>
            //   handleChangeInput("featureImg", e.target.files[0])
            // }
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
          {/* <img src={barndInput.imagePreviewUrl} width="130" /> */}
        </div>
        <div className="col-sm-2 mt-2">Full News</div>
        <div className="col-sm-10 mt-2">
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
            name="productFullDescription"
            // editorState={productInput.productFullDescription}
            // onEditorStateChange={(e) =>
            //   handleChangeInput("productFullDescription", e)
            // }
          />
        </div>
      </div>
    </>
  );
};

export default AddNews;
