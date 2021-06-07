import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import HeaderIcon from "./assets/images/headerIcon.png";
import BannerAdd from "./assets/images/bannerAdd.png";
import NewsImg from "./assets/images/newsImg.png";
import secondNews from "./assets/images/secondNews.png";
import miniNews from "./assets/images/miniNews.png";
import midRight from "./assets/images/midRight.png";
import printNews from "./assets/images/printNews.png";
import midBannerNews from "./assets/images/midBannerNews.png";
import BigNews from "./assets/images/bigNews.png";
import AvailableNews from "./assets/images/availableNews.png";
import saraDesh from "./assets/images/saraDesh.png";
import Bisso from "./assets/images/bisso.png";
import Khela from "./assets/images/khela.png";
import Binodon from "./assets/images/binodon.png";
import Banijjo from "./assets/images/Banijjo.png";
import androidApp from "./assets/images/androidApp.jpg";
import iphoneApp from "./assets/images/androidApp.jpg";
function Home() {
  const [key, setKey] = useState("home");
  return (
    <>
      <div className="all-element">
        <div className="pro-header fixed-width">
          <div className="row">
            <div className="col-sm-2">
              <div className="row">
                <div className="col-sm-4">
                  <i className="fa fa-reorder"></i>
                </div>
                <div className="col-sm-8">
                  <i className="fa fa-search"></i>
                </div>
              </div>

              <h6 className="text-muted mt-4">মঙ্গলবার, ০১ জুন ২০২১</h6>
            </div>
            <div className="col-sm-8">
              <div className="header-icon">
                <img src={HeaderIcon} />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-2">
                  {" "}
                  <i className="fa fa-bell-o"></i>
                </div>
                <div className="col-sm-6">
                  <a className="btn btn-outline-secondary">Login</a>
                </div>
              </div>
              <h6>
                সংস্করণ: <span>বাংলা</span> <i className="fa fa-angle-down"></i>
              </h6>
            </div>
          </div>
        </div>
        <div className="pro-nav">
          <div className="fixed-width">
            <div className="inner-nav">
              <ul>
                <li>সর্বশেষ</li>
                <li>বিশেষ সংবাদ</li>
                <li>রাজনীতি</li>
                <li>করোনাভাইরাস</li>
                <li>বাংলাদেশ</li>
                <li>বিশ্ব</li>
                <li>বাণিজ্য</li>
                <li>মতামত</li>
                <li>খেলা</li>
                <li>বিনোদন</li>
                <li>চাকরি</li>
                <li>লাইফস্টাইল</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pro-body fixed-width">
          <div className="banner-add">
            <img src={BannerAdd} />
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-4">
                  <div className="">
                    <h3>ঢাকায় এলো ফাইজারের এক লাখ টিকা</h3>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="">
                    <img src={NewsImg} />
                  </div>
                  <p>কক্সবাজারে রোহিঙ্গা শরণার্থীশিবির | ফাইল ছবি</p>
                </div>
                <div className="col-sm-4">
                  <div className="">
                    <h5>ঢাকায় এলো ফাইজারের এক লাখ টিকা</h5>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                    <div>
                      <img src={secondNews} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <h3>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h3>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <h3>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h3>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <h3>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h3>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-4">
                      <div>
                        <img src={miniNews} />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h4>
                        মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                      </h4>
                    </div>
                  </div>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-4">
                      <div>
                        <img src={miniNews} />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h4>
                        মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                      </h4>
                    </div>
                  </div>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-4">
                      <div>
                        <img src={miniNews} />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h4>
                        মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                      </h4>
                    </div>
                  </div>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div>
                          <img src={miniNews} />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <h4>
                          মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                        </h4>
                      </div>
                    </div>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>{" "}
                  <div className="col-sm-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div>
                          <img src={miniNews} />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <h4>
                          মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                        </h4>
                      </div>
                    </div>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>{" "}
                  <div className="col-sm-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div>
                          <img src={miniNews} />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <h4>
                          মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর
                        </h4>
                      </div>
                    </div>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <img src={NewsImg} />
              </div>
              <div>
                <div>
                  <img src={midRight} />
                </div>
                <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={miniNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                </div>

                <p>৬ ঘণ্টা আগে</p>
              </div>
              <div>
                <img src={printNews} />
              </div>
            </div>
          </div>
          {/*  <!-- Mid Banner News --> */}
          <div>
            <img src={midBannerNews} />
          </div>

          {/* Third row motamoth */}
          <div className="row">
            <div className="col-sm-3">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="home" title="Home">
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                  <h1>1</h1>
                  <h4>মনরোর লাইব্রেরিতে যেসব বই থাকত</h4>
                </Tab>
              </Tabs>
            </div>
            <div className="col-sm-6">
              <div>
                <h2>বই থাকত</h2>
                <div>
                  <img src={BigNews} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                  <div>
                    <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                  <div>
                    <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                    <p>
                      স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                      শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                      ফাইজারের ....
                    </p>
                    <p>৬ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                <img src={NewsImg} />
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={miniNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                </div>

                <p>৬ ঘণ্টা আগে</p>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={miniNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                </div>

                <p>৬ ঘণ্টা আগে</p>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={miniNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                </div>

                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
          </div>

          {/* Rajdhani */}
          <div className="row">
            <div className="col-sm-3">
              <div>
                <img src={AvailableNews} />
              </div>
              <div>
                <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                <img src={AvailableNews} />
              </div>
              <div>
                <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                <img src={AvailableNews} />
              </div>
              <div>
                <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                <img src={AvailableNews} />
              </div>
              <div>
                <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত ১</h4>
                <p>
                  স্বাস্থ্য অধিদপ্তরের ভ্যাকসিন ডেপ্লয়মেন্ট কমিটির সদস্যসচিব
                  শামসুল হক প্রথম আলোকে বলেন, বেলজিয়াম থেকে ১৮ বক্সে করে
                  ফাইজারের ....
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
          </div>
          {/* sara desh */}
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-9">
                  <div>
                    <img src={saraDesh} />
                  </div>
                  <h3>মোংলায় করোনা রোগীর ৭৫ ভাগই পৌর এলাকার</h3>
                  <p>
                    তবে মঙ্গলবার মোংলা শহরে লোকজন ও যানবাহনের চলাচল ছিল আগের দুই
                    দিনের তুলনায় বেশি। কোথাও কোথাও দোকানপাট খোলা রাখতে দেখা
                    গেছে। পৌর শহরের প্রধান কাঁচা, মুদি ও মাছ-মাংসের দোকানের
                    অধিকাংশ
                  </p>
                </div>
                <div className="col-sm-3">
                  <div>
                    <div>
                      <img src={AvailableNews} />
                    </div>
                    <div>
                      <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={AvailableNews} />
                    </div>
                    <div>
                      <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                  <div>
                    <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h4>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                  <div>
                    <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h4>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                  <div>
                    <h4>টঙ্গীতে ‘বন্ধুকযুদ্ধে’ নিহত </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                <img src={NewsImg} />
              </div>
              <div>
                <h2>আমার এলাকার খবর</h2>
                <select className="form-control">
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                </select>
                <select className="form-control">
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                </select>
                <select className="form-control">
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                  <option>এলাকার</option>
                </select>
                <a className="btn btn-primary d-block">এলাকার</a>
              </div>
            </div>
          </div>
          {/* bisso */}
          <div className="row">
            <div className="col-sm-6">
              <div>
                <img src={Bisso} />
              </div>
              <h3>মোংলায় করোনা রোগীর ৭৫ ভাগই পৌর এলাকার</h3>
              <p>
                বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                সংক্রমিত হওয়ার তথ্য পাওয়া
              </p>
              <p>৬ ঘণ্টা আগে</p>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
          </div>
          {/* Khela */}
          <div className="row">
            <div className="col-sm-4">
              <div>
                <div>
                  <img src={Khela} />
                </div>
                <p>বললেন ব্রাজিল কোচ</p>
                <h3>ব্রাজিলে কোপা আমেরিকা আয়োজনের বিপক্ষে কাসেমিরোরা</h3>
                <p>
                  কলম্বিয়া-আর্জেন্টিনার যৌথভাবে কোপা আমেরিকা আয়োজনের কথা ছিল।
                  কিন্তু অভ্যন্তরীণ রাজনৈতিক অস্থিরতার কারণে আয়োজক দেশ থেকে বাদ
                  দেওয়া হয় কলম্বিয়াকে।{" "}
                </p>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
          {/* binodon */}
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <div>
                  <img src={Binodon} />
                </div>
                <h3>ব্রাজিলে কোপা আমেরিকা আয়োজনের বিপক্ষে কাসেমিরোরা</h3>
                <p>
                  কলম্বিয়া-আর্জেন্টিনার যৌথভাবে কোপা আমেরিকা আয়োজনের কথা ছিল।
                  কিন্তু অভ্যন্তরীণ রাজনৈতিক অস্থিরতার কারণে আয়োজক দেশ থেকে বাদ
                  দেওয়া হয় কলম্বিয়াকে।{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>

                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banijjo */}
          <div className="row">
            <div className="col-sm-6">
              <div>
                <div>
                  <img src={Banijjo} />
                </div>
                <h3>ব্রাজিলে কোপা আমেরিকা আয়োজনের বিপক্ষে কাসেমিরোরা</h3>
                <p>
                  কলম্বিয়া-আর্জেন্টিনার যৌথভাবে কোপা আমেরিকা আয়োজনের কথা ছিল।
                  কিন্তু অভ্যন্তরীণ রাজনৈতিক অস্থিরতার কারণে আয়োজক দেশ থেকে বাদ
                  দেওয়া হয় কলম্বিয়াকে।{" "}
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
          </div>
          {/* Jibonjapon */}
          <div className="row">
            <div className="col-sm-6">
              <div>
                <div>
                  <img src={Banijjo} />
                </div>
                <h3>ব্রাজিলে কোপা আমেরিকা আয়োজনের বিপক্ষে কাসেমিরোরা</h3>
                <p>
                  কলম্বিয়া-আর্জেন্টিনার যৌথভাবে কোপা আমেরিকা আয়োজনের কথা ছিল।
                  কিন্তু অভ্যন্তরীণ রাজনৈতিক অস্থিরতার কারণে আয়োজক দেশ থেকে বাদ
                  দেওয়া হয় কলম্বিয়াকে।{" "}
                </p>
                <p>৬ ঘণ্টা আগে</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={AvailableNews} />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h4>মাছের আড়ত নিয়ন্ত্রনে শিহাব হত্যা, মামলায় দাবি স্ত্রীর</h4>
                  <p>
                    বাগেরহাটের মোংলায় আজ মঙ্গলবার নতুন করে ৩৩ জনের করোনাভাইরাসে
                    সংক্রমিত হওয়ার তথ্য পাওয়া গেছে। এ নিয়ে করোনার দ্বিতীয় ঢেউয়ে
                    উপজেলাটিতে{" "}
                  </p>
                  <p>৬ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="pro-footer">
            <h3>Prothom Alo</h3>
            <div className="row">
              <div className="col-sm-2">
                <h6>সংস্করণ</h6>
                <ul>
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
              <div className="col-sm-2">
                <ul>
                  <li>উত্তর আমেরিকা</li>
                  <li>উত্তর আমেরিকা</li>
                  <li>উত্তর আমেরিকা</li>
                  <li>উত্তর আমেরিকা</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6>আমাদের সঙ্গে থাকুন</h6>
                <ul>
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
                    <i className="fa fa-linkdin"></i>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-youtube"></i>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-sm-6"></div>
              <div className="col-sm-3">
                <h6>মোবাইল অ্যাপস ডাউনলোড করুন</h6>
                <ul>
                  <li>
                    <a href={androidApp}></a>
                  </li>
                  <li>
                    <a href={iphoneApp}></a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p>স্বত্ব © ২০২১ প্রথম আলো | সম্পাদক ও প্রকাশক: মতিউর রহমান</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
