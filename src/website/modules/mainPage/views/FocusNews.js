import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import AvailableNews from "../../../assets/images/availableNews.png";
import BigNews from "../../../assets/images/bigNews.png";
import NewsImg from "../../../assets/images/newsImg.png";
import secondNews from "../../../assets/images/secondNews.png";
import miniNews from "../../../assets/images/miniNews.png";

const FocusNews = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      {/* Third row motamoth */}
      <div className="row mt-4 border-bottom pb-3">
        <div className="col-md-3 col-sm-12 col-xs-12">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="home" title="সুখবর">
              <div className="mt-3">
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">১</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">২</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৩</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৪</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৫</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="পঠিত">
              <div className="mt-3">
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">১</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">২</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৩</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৪</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৫</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="আলোচিত">
              <div className="mt-3">
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">১</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">২</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৩</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৪</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
                <div className="border-bottom pb-2">
                  <h1 className="text-muted display-3 font-weight-bold">৫</h1>
                  <h6 className="text-muted mt-3">
                    মনরোর লাইব্রেরিতে যেসব বই থাকত
                  </h6>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="col-sm-6">
          <div className="border-bottom pb-3 ">
            <h6>একটু থামুন</h6>
            <div className="img">
              <img src={BigNews} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="img">
                <img src={AvailableNews} />
              </div>
              <div>
                <h6 className="mt-1">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h6>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img">
                <img src={AvailableNews} />
              </div>
              <div>
                <h6 className="mt-1">টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h6>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <h6 className="invisible">Heloo</h6>
          <div className="img">
            <img src={NewsImg} />
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি</h6>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি</h6>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি</h6>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি</h6>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি</h6>
              <p className="hour">৬ ঘণ্টা আগে</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusNews;
