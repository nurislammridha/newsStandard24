import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderNews from "../components/HeaderNews";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseNewsDeleted,
  GetNewsList,
  ImageUrl,
  NewsDelete,
  SetNewsUpdate,
} from "../_redux/newsAction/NewsAction";

const ListNews = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsInfo.newsList);
  const isNewsLoader = useSelector((state) => state.newsInfo.isNewsLoader);
  const isNewsDeleted = useSelector((state) => state.newsInfo.isNewsDeleted);
  useEffect(() => {
    dispatch(GetNewsList());
  }, []);
  const handleEdit = (data) => {
    dispatch(SetNewsUpdate(data));
    history.push(`/admin/edit_news/${data.newsId._id}`);
  };
  const handleDelete = (imgId, dataId) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this news?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(NewsDelete(imgId, dataId)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  useEffect(() => {
    if (isNewsDeleted) {
      dispatch(GetNewsList());
      dispatch(FalseNewsDeleted());
    }
  }, [isNewsDeleted]);
  return (
    <>
      <div className="">
        <HeaderNews />
        {isNewsLoader && (
          <>
            <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}

        {!isNewsLoader && newsList && newsList.length === 0 && (
          <>
            <div class="alert alert-success text-center mt-5 mt-5" role="alert">
              Sorry ! No data found.
            </div>
          </>
        )}
        {!isNewsLoader && newsList && newsList !== null && newsList.length > 0 && (
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
              {newsList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.newsId.newsTitle}</td>
                  <td>{item.newsId.categoryName}</td>
                  <td>{item.newsId.writterName}</td>
                  <td>
                    <img
                      src={ImageUrl(item.thumbnailImg)}
                      width="60"
                      height="30"
                    />
                  </td>
                  <td>
                    <a className="btn btn-primary btn-sm">ACTIVE</a>
                  </td>
                  <td>
                    <a className="btn btn-outline-success btn-sm">
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-sm ml-2"
                      onClick={() => handleEdit(item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a
                      className="btn btn-outline-danger btn-sm ml-2"
                      onClick={() => handleDelete(item._id, item.newsId._id)}
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

export default ListNews;
