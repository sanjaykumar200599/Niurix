import React, { useState, useEffect } from "react";
import Styles from "./niurixproducts.module.css";
import { homePage as Data } from "../../../data/homepage/homepage";
import { ReactComponent as Rightarrow } from "../../../assets/homepage/RightArrow.svg";
import { Link } from "wouter";
function NiurixProducts() {
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);
  const [curIndex, setIndex] = useState(0);

  // const [disabled, setDisabled]= useState(false)
  const products = Data.niurix_products;
  const handleProductDetails = (val) => {
    let index = products.findIndex((x) => x.prod === val);
    let data = products.filter((prod) => prod.prod === val)[0];
    let options = products.filter((prod) => prod.prod !== val);
    // setCurProd(val);
    setIndex(index);
    setData(data);
    setOptions(options);
  };

  const handleClickArrow = (i) => {
    if (i >= 3) {
      i = 3;
    }
    if (i <= 0) {
      i = 0;
    }
    let data = products.filter((_, index) => index === i)[0];
    let options = products.filter((_, index) => index !== i);

    setIndex(i);
    setData(data);
    setOptions(options);
  };

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    handleProductDetails("P4200R");
  }, []);

  const loadBGImg = (name) => {
    try {
      return require(`../../../assets/homepage/${name}.webp`);
    } catch (e) {
      return require("../../../assets/homepage/P4200R.webp");
    }
  };

  return (
    <div>
      <div className={Styles.products_section}>
        <div className={Styles.products_conatiner}>
          <div className={Styles.products1}>
            <div className={Styles.products_wrapper}>
              <p className={Styles.products_title}>{data.prod}</p>
            </div>
            <div className={Styles.products_content}>
              <div className={Styles.mainimg_wrapper}></div>
              <div className={Styles.main_image}>
                <img src={loadBGImg(data.prod)} />
              </div>
              <div className={Styles.second}>
                <h4 className={Styles.products_name}>
                  {data.prod}

                  <pre
                    className={Styles.our_products}
                    dangerouslySetInnerHTML={{ __html: data.type }}
                  ></pre>
                </h4>

                <p className={Styles.products_desc}>{data.desc}</p>
                <Link href={`${data.url}`}>
                  <div className={Styles.products_button}>
                    <div>Learn More</div>
                    <Rightarrow className={Styles.rightarrow} />{" "}
                  </div>
                </Link>
              </div>
            </div>
            {/* row of options */}
            <div className={Styles.products2}>
              {options.map((item, index) => (
                <div
                  key={item.prod}
                  onClick={() => handleProductDetails(item.prod, index)}
                >
                  <div className={Styles.products2_images}>
                    <img src={loadBGImg(item.prod)} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={Styles.products_buttons_wrapper}>
          <div className={Styles.products_buttons}>
            <div className={Styles.rightsvg}>
              <Rightarrow
                className={
                  curIndex === 0
                    ? Styles.flipped_button1
                    : Styles.flipped_button1_enabled
                }
                onClick={() => handleClickArrow(curIndex - 1)}
              />
            </div>
            <div className={Styles.rightsvg}>
              <Rightarrow
                className={
                  curIndex === 3
                    ? Styles.flipped_button2
                    : Styles.flipped_button2_enabled
                }
                onClick={() => handleClickArrow(curIndex + 1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.products_mob}>
        <div className={Styles.products_content_mob}>
          <div className={Styles.products_title_mob}>
            <p className={Styles.title_mob}>{data.prod}</p>
          </div>
          <div className={Styles.main_image_wrapper}>
            <div className={Styles.buttonarrow}>
              <Rightarrow
                className={
                  curIndex === 0
                    ? Styles.rightarrow_mob_flipped
                    : Styles.rightarrow_mob_flipped_enabled
                }
                onClick={() => handleClickArrow(curIndex - 1)}
              />
            </div>
            <div className={Styles.main_image_mob}>
              <img className={Styles.img1} src={loadBGImg(data.prod)} />
            </div>
            <div className={Styles.buttonarrow}>
              <Rightarrow
                className={
                  curIndex === 3
                    ? Styles.rightarrow_mob
                    : Styles.rightarrow_mob_enabled
                }
                onClick={() => handleClickArrow(curIndex + 1)}
              />
            </div>
          </div>

          <div className={Styles.desc_wrapper_mob}>
            <h4 className={Styles.products_name_mob}>
              {data.prod}
              <pre
                className={Styles.our_products}
                dangerouslySetInnerHTML={{ __html: data.type }}
              ></pre>
            </h4>

            <p className={Styles.products_desc_mob}>{data.desc}</p>
            <Link href={`${data.url}`}>
              <div className={Styles.products_button_mob}>
                <div>Learn More</div>
                <Rightarrow className={Styles.arrow_mob} />{" "}
              </div>
            </Link>
          </div>

          <div className={Styles.products_options_mob}>
            {options.map((item, index) => (
              <div
                className={Styles.options_images}
                key={item.prod}
                onClick={() => handleProductDetails(item.prod, index)}
              >
                <img src={loadBGImg(item.prod)} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.colorpart}></div>
      </div>
    </div>
  );
}

export default NiurixProducts;
