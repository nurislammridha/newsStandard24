import React from "react";
import singleNews from "../../../../assets/images/singleNews.png";
const Comments = () => {
  return (
    <>
      <div className="row mt-3 border-bottom pb-3">
        <div className="col-sm-4">
          <h3>মন্তব্য করুন</h3>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <ul className="footer-bottom">
            <li>
              <i className="fa fa-facebook"></i>{" "}
            </li>
            <li>
              <i className="fa fa-twitter"></i>{" "}
            </li>
            <li>
              <i className="fa fa-instagram"></i>{" "}
            </li>
            <li>
              <i className="fa fa-youtube"></i>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 border-bottom pb-3">
        <div className="col-sm-2">1 comment</div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">Sign in</div>
      </div>
      <div className="row mt-3 border-bottom pb-3">
        <div className="col-sm-10">
          <input className="form-control" />
        </div>
        <div className="col-sm-2">
          <a className="btn btn-outline-primary">Post</a>
        </div>
      </div>
      <div className="mt-3 border-bottom pb-3">
        <h6>
          Shahid Ullah Miazi{" "}
          <span className="text-muted">Yesterday at 11:04 PM</span>{" "}
        </h6>
        <p className="text-mued">
          সর্বত্র কিশোর গ্যাং বা কিশোরদের আড্ডা দেখা যায়। তাদের মধ্যে বখাটেদের
          উৎপাত বেশি। এদেরকে কারিগরি জ্ঞান দেয়া যায়। স্কুল ফেলুয়াররা অলস সময়
          কাটায়। তাদেরকে মাধ্যমিক বিদ্যালয়ে সন্ধ্যাকালীন কারিগরি প্রশিক্ষণ
          দেয়া হলে মোটামোটি কাজে থাকত।
        </p>
        <a className="btn btn-outline-primary">Reply</a>
      </div>
      <h5 className="mt-3">এ সম্পর্কিত আরও পড়ুন</h5>
      <div className="row mt-3 ">
        <div className="col-sm-8">
          <h6 className="text-muted">
            ‘কিশোর গ্যাং’ সন্দেহে আটক ৪০, পরিবারের জিম্মায় মুক্তি
          </h6>
          <p className="text-muted">১৪ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-4">
          <div className="img">
            <img src={singleNews} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6 className="text-muted">
            ‘কিশোর গ্যাং’ সন্দেহে আটক ৪০, পরিবারের জিম্মায় মুক্তি
          </h6>
          <p className="text-muted">১৪ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-4">
          <div className="img">
            <img src={singleNews} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6 className="text-muted">
            ‘কিশোর গ্যাং’ সন্দেহে আটক ৪০, পরিবারের জিম্মায় মুক্তি
          </h6>
          <p className="text-muted">১৪ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-4">
          <div className="img">
            <img src={singleNews} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6 className="text-muted">
            ‘কিশোর গ্যাং’ সন্দেহে আটক ৪০, পরিবারের জিম্মায় মুক্তি
          </h6>
          <p className="text-muted">১৪ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-4">
          <div className="img">
            <img src={singleNews} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6 className="text-muted">
            ‘কিশোর গ্যাং’ সন্দেহে আটক ৪০, পরিবারের জিম্মায় মুক্তি
          </h6>
          <p className="text-muted">১৪ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-4">
          <div className="img">
            <img src={singleNews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
