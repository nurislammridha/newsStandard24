import React from "react";
import androidApp from "../../../assets/images/androidApp.jpg";
import iphoneApp from "../../../assets/images/androidApp.jpg";

const Footer = () => {
  return (
    <>
      <div className="pro-footer mt-5">
        <h3 className="mt-5">NewsSTANDARD24</h3>
        <div className="row mt-5 border-bottom pb-3">
          <div className="col-sm-2 border-right">
            <h6>সংস্করণ</h6>
            <ul className="first-foo">
              <li>Bangla</li>
              <li>English</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
          <div className="col-sm-2 border-right">
            <ul>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
              <li>উত্তর আমেরিকা</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 border-bottom pb-5">
          <div className="col-sm-2">
            <h6 className="text-center">আমাদের সঙ্গে থাকুন</h6>
            <ul className="footer-bottom">
              <li>
                {" "}
                <i className="fa fa-facebook"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fa fa-twitter"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fa fa-instagram"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fa fa-youtube"></i>{" "}
              </li>
            </ul>
          </div>
          <div className="col-sm-7"></div>
          <div className="col-sm-3">
            <h6 className="text-center">মোবাইল অ্যাপস ডাউনলোড করুন</h6>
            <ul className="footer-apps">
              <li>
                <div className="img">
                  <img src={androidApp} />
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={androidApp} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <p className="text-center mt-5 mb-5 text-muted">
            স্বত্ব &copy; NewsSTANDARD24 | সম্পাদক ও প্রকাশক: মো: ফয়জুন্নুর আখন
            রাসেল
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
