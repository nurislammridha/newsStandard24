import React from "react";
import Bisso from "../../../assets/images/bisso.png";
import AvailableNews from "../../../assets/images/availableNews.png";

const World = () => {
  return (
    <>
      {/* bisso */}
      <div className="mt-3">
        <h6>
          বিশ্ব
          <i className="fa fa-angle-right ml-3 text-danger"></i>
        </h6>
      </div>
      <div className="row mt-3 border-bottom pb-4">
        <div className="col-sm-6 border-right ">
          <div className="img">
            <img src={Bisso} />
          </div>
          <h5 className="mt-2">মোংলায় করোনা রোগীর ৭৫ ভাগই পৌর এলাকার</h5>
          <p>
            বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে সংক্রমিত
            হওয়ার তথ্য পাওয়া
          </p>
          <p className="hour">৬ ঘণ্টা আগে</p>
        </div>
        <div className="col-sm-6">
          <div className="row border-bottom pb-3">
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
          <div className="row border-bottom pb-3 mt-3">
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

export default World;
