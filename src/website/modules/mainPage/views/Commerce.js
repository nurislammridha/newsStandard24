import React from "react";
import AvailableNews from "../../../assets/images/availableNews.png";
import Banijjo from "../../../assets/images/Banijjo.png";

const Commerce = () => {
  return (
    <>
      <div className="mt-4">
        <h4>
          বানিজ্য
          <i className="fa fa-angle-right ml-3 text-danger"></i>
        </h4>
      </div>
      {/* Banijjo */}
      <div className="row mt-3 border-bottom pb-3">
        <div className="col-sm-6 border-right">
          <div>
            <div className="img">
              <img src={Banijjo} />
            </div>
            <h4 className="mt-3">ব্রাজিলে কোপা আমেরিকা আয়োজনের বিপক্ষে</h4>
            <p>
              কলম্বিয়া-আর্জেন্টিনার যৌথভাবে কোপা আমেরিকা আয়োজনের কথা ছিল। কিন্তু
              অভ্যন্তরীণ রাজনৈতিক অস্থিরতার কারণে আয়োজক দেশ থেকে বাদ দেওয়া হয়
              কলম্বিয়াকে।{" "}
            </p>
            <p className="hour">৬ ঘণ্টা আগে</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row border-bottom pb-4 ">
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা</h6>
              <p>
                বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                উপজেলাটিতে{" "}
              </p>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row border-bottom mt-3 pb-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা</h6>
              <p>
                বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                উপজেলাটিতে{" "}
              </p>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা</h6>
              <p>
                বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                উপজেলাটিতে{" "}
              </p>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commerce;
