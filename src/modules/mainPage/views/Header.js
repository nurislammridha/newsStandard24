import React from "react";
import HeaderIcon from "../../../assets/images/headerIcon.png";
const Header = () => {
  return (
    <>
      <div className="pro-header fixed-width mt-4">
        <div className="row">
          <div className="col-md-2 col-sm-2 col-xs-2">
            <div className="row">
              <div className="col-sm-3">
                <i className="fa fa-reorder"></i>
              </div>
              <div className="col-sm-8">
                <i className="fa fa-search"></i>
              </div>
            </div>

            <h6 className="text-muted mt-5 d-none d-md-block">
              মঙ্গলবার, ০১ জুন ২০২১
            </h6>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="d-flex justify-content-center">
              <div className="header-icon">
                <img className="img-fluid" src={HeaderIcon} />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">
                <i className="fa fa-bell-o"></i>
              </div>
              <div className="col-sm-6">
                <a className="btn btn-outline-secondary d-block text-primary btn-sm">
                  Login
                </a>
              </div>
            </div>
            <div className="float-right mt-4">
              <h6 className="d-none d-md-block">
                <span className="text-muted">সংস্করণ:</span>{" "}
                <span className="ml-1">বাংলা</span>
                <i className="fa fa-angle-down ml-2 text-muted"></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
