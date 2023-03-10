import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style/indexPage.scss";
import useFetchData from "../../Hook/useFetchData";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { myContext } from "../../components/Context/Context";
import Slick from "../../components/Slick/Slick";
import uuid from "react-uuid";

export default function () {
  const [, loading] = useFetchData();
  const Context = useContext(myContext);

  const [listFeatured] = useFetchData("seller", 1, "");
  const [listSneakers] = useFetchData("sneaker", 1, "");
  const [listBags] = useFetchData("bag", 1, "");

  const [listTshirt] = useFetchData("t-shirt", 1, "");
  const [listHoodies] = useFetchData("hoodies", 1, "");
  const [listForMan] = useFetchData("for-man", 1, "");
  const [listForWoMen] = useFetchData("for-women", 1, "");

  return (
    <div id="index-page">
      <div className="container-fluit">
        <Header popularProduct={listFeatured} />

        <div id="banner">
          <div className="container">
            <div className="banner-content">
              <div
                className="banner-text"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                An exclusive selection of this
                <span data-aos="zoom-out-up" data-aos-duration="1000">
                  season's trends
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="category-set">
                <div className="col-lg-6 col-md-6 col-12">
                  <Link
                    to={"/shop-fashion/for-women"}
                    className="category-item"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <img
                      loading="lazy"
                      src="https://i.postimg.cc/6p6CDV3C/women.jpg"
                      alt=""
                    />
                    <div className="title">
                      <h1>For Women</h1>
                      <span>{listForWoMen.length} products</span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <Link
                    to={"/shop-fashion/for-man"}
                    className="category-item"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <img
                      loading="lazy"
                      src="https://i.postimg.cc/x8hpt1Ks/man.jpg"
                      alt=""
                    />
                    <div className="title">
                      <h1>For Man</h1>
                      <span>{listForMan.length} products</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="products-trending">
              <div className="header-text">
                <h1 data-aos="fade-up" data-aos-duration="600">
                  Energize
                </h1>
                <span data-aos="fade-up" data-aos-duration="800">
                  look
                </span>
              </div>

              <div className="trending-content">
                <div className="row">
                  <div className="content-wraper">
                    {loading ? (
                      <Loading />
                    ) : (
                      Context.popularProduct.map((element) => {
                        return (
                          <div key={uuid()} className="col-lg-3 col-md-3 col-6">
                            <Product product={element} />;
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              <div className="bottom-text">
                <h1 data-aos="fade-up" data-aos-duration="600">
                  Trending
                </h1>
                <span data-aos="fade-up" data-aos-duration="800">
                  outfits
                </span>
              </div>
            </div>

            <div className="products-classify">
              <div className="row">
                <div className="classify-wraper">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Link
                      to={"/shop-fashion/sneaker"}
                      className="classify-item"
                      data-aos="zoom-out"
                      data-aos-duration="600"
                      data-aos-easing="linear"
                    >
                      <img
                        loading="lazy"
                        src="https://i.postimg.cc/brVQjZ7r/classify-1.jpg"
                        alt=""
                      />
                      <div className="title">
                        <h1>Sneakers</h1>
                        <span>{listSneakers.length} products</span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-8 col-md-8 col-12">
                    <Link
                      to={"/shop-fashion/hoodies"}
                      className="classify-item"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-easing="linear"
                    >
                      <img
                        loading="lazy"
                        src="https://i.postimg.cc/hP7JGZxp/classify-2.webp"
                        alt=""
                      />
                      <div className="title">
                        <h1>Hoodies</h1>
                        <span>{listHoodies.length} products</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="classify-wraper">
                  <div className="col-8 col-md-8 col-12">
                    <Link
                      to={"/shop-fashion/bag"}
                      className="classify-item"
                      data-aos="fade-right"
                      data-aos-duration="600"
                      data-aos-easing="linear"
                    >
                      <img
                        loading="lazy"
                        src="https://i.postimg.cc/26sPz5nk/classify-3.webp"
                        alt=""
                      />
                      <div className="title">
                        <h1>Bags</h1>
                        <span>{listBags.length} products</span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <Link
                      to={"/shop-fashion/t-shirt"}
                      className="classify-item"
                      data-aos="zoom-out"
                      data-aos-duration="600"
                      data-aos-easing="linear"
                    >
                      <img
                        loading="lazy"
                        src="https://i.postimg.cc/RCGDsGDC/classify-4.webp"
                        alt=""
                      />
                      <div className="title">
                        <h1>T-Shirt</h1>
                        <span>{listTshirt.length} products</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="products-seller">
            <div className="container">
              <Tabs>
                <div className="seller-panel">
                  <div className="title">
                    <h1>Best Seller</h1>
                  </div>
                  <TabList>
                    <Tab>Featured</Tab>
                    <Tab>Sneakers</Tab>
                    <Tab>Bags</Tab>
                  </TabList>
                </div>

                <div className="seller-main">
                  {loading ? (
                    <Loading />
                  ) : (
                    <>
                      <TabPanel>
                        <Slick list={listFeatured} />
                      </TabPanel>
                      <TabPanel>
                        <Slick list={listSneakers} />
                      </TabPanel>
                      <TabPanel>
                        <Slick list={listBags} />
                      </TabPanel>
                    </>
                  )}
                </div>
              </Tabs>
            </div>
          </div>

          <div className="custom-banner">
            <div className="row">
              <div className="custom-wraper">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wraper-left">
                    <div className="row">
                      <div className="imgs">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div
                            className="custom-item"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            data-aos-delay="300"
                          >
                            <img
                              loading="lazy"
                              src="https://i.postimg.cc/HnZjqp4Y/custom1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div
                            className="custom-item"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="300"
                          >
                            <img
                              loading="lazy"
                              src="https://i.postimg.cc/c12mjYT8/custom2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="imgs">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div
                            className="custom-item"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            data-aos-delay="1200"
                          >
                            <img
                              loading="lazy"
                              src="https://i.postimg.cc/NFX2HK3K/custom3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div
                            className="custom-item"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            data-aos-delay="900"
                          >
                            <img
                              loading="lazy"
                              src="https://i.postimg.cc/nVTqqm9D/custom4.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wraper-right">
                    <div className="custom-item">
                      <img
                        loading="lazy"
                        src="https://i.postimg.cc/XJZjDT7F/custom5.jpg"
                        alt=""
                      />
                      <div className="custom-item-content">
                        <div className="item-heading">
                          <img
                            loading="lazy"
                            src="https://i.postimg.cc/zXdsYQZh/Logo-Shopee.png"
                            alt=""
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            data-aos-delay="600"
                          />
                          <span
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                          >
                            THEGEM
                          </span>
                        </div>
                        <button className="item-button">
                          <a href="">Shop by Shopee</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="final-sale">
              <div className="final-sale-item">
                <span
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  Final sale
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  40% OFF
                </span>
              </div>
              <div className="final-sale-item right">
                <h1  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="800">
                  An has feugiat vivendum, ad vix tacimates cum commune
                  lucilius!
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
