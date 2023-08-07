import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

const StarRating = ({ data, ratinginfo1 }) => {
  const [ratingStatus, setratingStatus] = useState()
  const [status, setStatus] = useState(true)
  const mySentence = data.name.trim();
  const productName = mySentence.split(" ");


  const newProductName = productName.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join("_");

  // Insert Rating
  const addRating = async (index) => {
    let data1 = { 'bank_product_id': data.bank_product_id, 'rating': index, 'session_id': 'Rf-'+mySentence.slice(0, 3)+'-'+Math.random().toString(36).substring(2, 8 + 2) }
    const res = await axios.post(`${process.env.APIHOST}/api/add-rating/`, data1);
    if (res.data.status) {
      if (typeof window !== 'undefined') {
        localStorage.setItem("addrating", 'yes');
        localStorage.setItem("addratingvalue", index);
      }
      setHover(index)
      setratingStatus(window.localStorage.getItem("addrating"))
      setHover(window.localStorage.getItem("addratingvalue"))
    }
    getRating()
  }

  // Get Rating
  const router = useRouter()
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  let [ratinginfo, setRatinginfo] = useState(ratinginfo1[0]);

  const getRating = async () => {
    await axios.get(`${process.env.APP_URL}/get_rating_bybpid/` + data.bank_product_id).then((response1) => {
      setRatinginfo(response1.data[0]);
    });
  }

  useEffect(() => {
    setratingStatus(window.localStorage.getItem("addrating"))
    setHover(window.localStorage.getItem("addratingvalue"))
    getRating()
  }, [router])

  return (
    <>
      <div className="pro-rating">
        <h5 className="heading">Product Rating</h5>
        <p> <b> ( {ratinginfo ? ratinginfo['average_rating'] : 0} /5 )</b>

        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              disabled={ratingStatus ? true : false}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => addRating(index)}
              onMouseEnter={!ratingStatus ? () => setHover(index) : () => setStatus(true)}
              onMouseLeave={!ratingStatus ? () => setHover(rating) : () => setStatus(true)}
            >
              <span className="star">&#9733;</span>
            </button>

          );
        })}
       </p>
        <p>Total - {ratinginfo ? ratinginfo['total_ratings'] : 0} ratings</p>
 
        <div className="row ratingWrapper " >

          <div className="side">
            5 <span className="star fafa">&#9733;</span>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{ width: ratinginfo ? ratinginfo['total_rating_5'] / ratinginfo['total_ratings'] * 100 + '%' : "0%" }}> </div>
            </div>
          </div>
          <div className="side right">
            <div>{ratinginfo ? ratinginfo['total_rating_5'] : 0}</div>
          </div>

          <div className="side">
            4 <span className="star fafa">&#9733;</span>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{ width: ratinginfo ? ratinginfo['total_rating_4'] / ratinginfo['total_ratings'] * 100 + '%' : "0%" }}></div>
            </div>
          </div>
          <div className="side right">
            <div>{ratinginfo ? ratinginfo['total_rating_4'] : 0}</div>
          </div>

          <div className="side">
            3 <span className="star fafa">&#9733;</span>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{ width: ratinginfo ? ratinginfo['total_rating_3'] / ratinginfo['total_ratings'] * 100 + '%' : "0%" }}></div>
            </div>
          </div>
          <div className="side right">
            <div>{ratinginfo ? ratinginfo['total_rating_3'] : 0}</div>
          </div>

          <div className="side">
            2 <span className="star fafa">&#9733;</span>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{ width: ratinginfo ? ratinginfo['total_rating_2'] / ratinginfo['total_ratings'] * 100 + '%' : "0%" }}></div>
            </div>
          </div>
          <div className="side right">
            <div>{ratinginfo ? ratinginfo['total_rating_2'] : 0}</div>
          </div>

          <div className="side">
            1 <span className="star fafa">&#9733;</span>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{ width: ratinginfo ? ratinginfo['total_rating_1'] / ratinginfo['total_ratings'] * 100 + '%' : "0%" }}></div>
            </div>
          </div>
          <div className="side right">
            <div>{ratinginfo ? ratinginfo['total_rating_1'] : 0}</div>
          </div>

        </div>  

      </div>

      {/* google structure - product schema */}
      <div itemType="https://schema.org/Product" itemScope>
        <meta itemProp="sku" content={data.id} />
        <meta itemProp="name" content={data.name} />
        <link itemProp="image" href={`/uploads/product_bank/${newProductName}.webp`} />
        <meta itemProp="description" content={data.meta_description} />
        <div itemProp="aggregateRating" itemType="https://schema.org/AggregateRating" itemScope>
          <meta itemProp="reviewCount" content={ratinginfo ? ratinginfo['total_ratings'] : "0"} />
          <meta itemProp="ratingValue" content={ratinginfo ? ratinginfo['average_rating'] : "0"} />
        </div>
      </div>

    </>
  );
};

export default StarRating;