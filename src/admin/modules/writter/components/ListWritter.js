import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderWritter from "../components/HeaderWritter";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseWritterDeleted,
  GetWritterList,
  SetWritterUpdate,
  WritterDelete,
} from "../_redux/writterAction/WritterAction";

const ListWritter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const writterList = useSelector((state) => state.writterInfo.writterList);
  const isWritterLoader = useSelector(
    (state) => state.writterInfo.isWritterLoader
  );
  const isWritterDeleted = useSelector(
    (state) => state.writterInfo.isWritterDeleted
  );
  useEffect(() => {
    dispatch(GetWritterList());
  }, []);
  const handleEdit = (data) => {
    dispatch(SetWritterUpdate(data));
    history.push(`/admin/edit_writter/${data._id}`);
  };
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this writter?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(WritterDelete(id)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  useEffect(() => {
    if (isWritterDeleted) {
      dispatch(GetWritterList());
      dispatch(FalseWritterDeleted());
    }
  }, []);
  return (
    <>
      <div className="">
        <HeaderWritter />
        {isWritterLoader && (
          <>
            <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}

        {!isWritterLoader && writterList && writterList.length === 0 && (
          <>
            <div class="alert alert-success text-center mt-5 mt-5" role="alert">
              Sorry ! No data found.
            </div>
          </>
        )}
        {!isWritterLoader &&
          writterList &&
          writterList !== null &&
          writterList.length > 0 && (
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
                {writterList.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName + item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.division}</td>
                    <td>{item.district}</td>
                    <td>{item.address}</td>
                    <td>
                      <a className="btn btn-primary btn-sm">ACTIVE</a>
                    </td>
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

export default ListWritter;
