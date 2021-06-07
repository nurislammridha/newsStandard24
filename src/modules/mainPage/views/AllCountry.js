import React from "react";
import AvailableNews from "../../../assets/images/availableNews.png";
import saraDesh from "../../../assets/images/saraDesh.png";
import NewsImg from "../../../assets/images/newsImg.png";

const AllCountry = () => {
  return (
    <>
      {/* sara desh */}
      <div className="mt-3">
        <h6>
          সারা দেশ
          <i className="fa fa-angle-right ml-3 text-danger"></i>
        </h6>
      </div>
      <div className="row border-bottom pb-3">
        <div className="col-sm-9">
          <div className="row  border-bottom pb-3">
            <div className="col-sm-9 border-right">
              <div className="img">
                <img src={saraDesh} />
              </div>
              <h5 className="mt-3">মোংলায় করোনা রোগীর ৭৫ ভাগই পৌর এলাকার</h5>
              <p>
                তবে মঙ্গলবার মোংলা শহরে লোকজন ও যানবাহনের চলাচল ছিল আগের দুই
                দিনের তুলনায় বেশি। কোথাও কোথাও দোকানপাট খোলা রাখতে দেখা গেছে।
                পৌর শহরের প্রধান কাঁচা, মুদি ও মাছ-মাংসের দোকানের অধিকাংশ
              </p>
            </div>
            <div className="col-sm-3">
              <div className="border-bottom pb-3">
                <div className="img">
                  <img src={AvailableNews} />
                </div>
                <div>
                  <h6 className="mt-3">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h6>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="img">
                  <img src={AvailableNews} />
                </div>
                <div>
                  <h6 className="mt-3">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h6>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
              <div>
                <h6 className="mt-3">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h6>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
              <div>
                <h6 className="mt-3">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h6>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img">
                <img src={AvailableNews} />
              </div>
              <div>
                <h6 className="mt-3">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="img border-bottom pb-5">
            <img src={NewsImg} />
          </div>
          <div>
            <div className="mt-5">
              <h4 className="">আমার এলাকার খবর</h4>
              <select className="form-control mt-4">
                <option className>বিভাগ</option>
                <option>এলাকার</option>
                <option>এলাকার</option>
              </select>
              <select className="form-control mt-4">
                <option>জেলা</option>
                <option>এলাকার</option>
                <option>এলাকার</option>
              </select>
              <select className="form-control mt-4">
                <option>উপজেলা</option>
                <option>এলাকার</option>
                <option>এলাকার</option>
              </select>
              <a className="btn btn-primary d-block mt-4">
                <i className="fa fa-search mr-2"></i>
                খুজুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCountry;
