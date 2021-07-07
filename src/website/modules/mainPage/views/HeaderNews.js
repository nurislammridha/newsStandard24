import React from "react";

import BannerAdd from "../../../assets/images/bannerAdd.png";
import NewsImg from "../../../assets/images/newsImg.png";
import secondNews from "../../../assets/images/secondNews.png";
import miniNews from "../../../assets/images/miniNews.png";
import midRight from "../../../assets/images/midRight.png";
import printNews from "../../../assets/images/printNews.png";
import midBannerNews from "../../../assets/images/midBannerNews.png";

const HeaderNews = () => {
  return (
    <>
      <div className=" mt-4 d-flex justify-content-center">
        <div className="banner-add">
          <img src={BannerAdd} />
        </div>
      </div>

      <div className="row mt-4 border-bottom pb-2">
        <div className="col-md-9 col-sm-12 col-xs-12">
          <div className="header-news-left pr-3">
            {/* firsr row */}
            <div className="row border-bottom pb-2">
              <div className="col-md-4 d-none d-md-block">
                <div className="">
                  <h5>ঢাকায় এলো ফাইজারের এক লাখ টিকা</h5>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                    ফাইজারের ....
                  </p>
                  <p className="hour">৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div className="img">
                  <img className="" src={NewsImg} />
                </div>
                <p className="text-muted">
                  কক্সবাজারে রোহিঙ্গা শরণার্থীশিবির | ফাইল ছবি
                </p>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="">
                  <h5>ঢাকায় এলো ফাইজারের এক লাখ টিকা</h5>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                    ফাইজারের ....
                  </p>
                  <p className="hour">৬ ঘণ্টা আগে</p>
                  <div className="img">
                    <img src={secondNews} />
                  </div>
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="row border-bottom mt-2 pb-2">
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div>
                  <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত</h4>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                    ফাইজারের ....
                  </p>
                  <p className="hour">৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div>
                  <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত</h4>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                    ফাইজারের ....
                  </p>
                  <p className="hour">৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div>
                  <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত</h4>
                  <p>
                    স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                    শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                    ফাইজারের ....
                  </p>
                  <p className="hour">৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
            {/* third row */}
            <div className="row border-bottom mt-2 pb-2">
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>
            </div>
            {/* fourth row */}
            <div className="row mt-2">
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>{" "}
              <div className="col-md-4 col-sm-12 col-xs-12 border-right">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>{" "}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="img">
                      <img src={miniNews} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6>
                      মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                    </h6>
                  </div>
                </div>
                <p className="hour">৬ ঘণ্টা আগে</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12">
          <div className="border-bottom img pb-2">
            <img src={NewsImg} />
          </div>
          <div className="border-bottom mt-2 bp-2">
            <div className="img">
              <img src={midRight} />
            </div>
            <h4 className="mt-1">মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
          </div>
          <div className="row border-bottom bp-2 mt-2">
            <div className="col-sm-4">
              <div className="img">
                <img src={miniNews} />
              </div>
            </div>
            <div className="col-sm-8">
              <h6>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h6>
            </div>

            <p className="hour">৬ ঘণ্টা আগে</p>
          </div>
          <div className="mt-2 img">
            <img src={printNews} />
          </div>
        </div>
      </div>
      {/*  <!-- Mid Banner News --> */}
      <div className="border-bottom pb-2 mt-4 d-flex justify-content-center">
        <div className="banner-add">
          <img src={midBannerNews} />
        </div>
      </div>
    </>
  );
};

export default HeaderNews;
