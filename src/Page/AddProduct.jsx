/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from 'axios';

function AddProduct() {
    const [data, setData] = useState({
        roomType: "",
        price: ""
    });

    const onInsert = async (room, price) => {

        if (!room || !price) {
            alert("Please fill in both Room Type and Price.");
            return;
        }

        data.roomType = room;
        data.price = price;
        const res = await axios.post(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/product.json`, data);
        alert("Inserted successfully");
        // console.log(data);
    };



    return (
        <div>

            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Product</h1>
                        </div>
                    </div>
                    {/*/.ROW*/}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Hotel Room
                                </div>
                                <div className="panel-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="panel panel-primary">
                                        <div className="panel-heading text-center">
                                            <h4
                                            // onChange={handleHotelTypeChange}
                                            >Junior Suite Room</h4>
                                        </div>
                                        <div className="ps-2 text-center">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <div className="panel-body ">
                                            <h2 className="card-text text-center"
                                            //  onChange={handlePriceChange}
                                            >₹ 2000</h2>
                                            <hr />
                                            <div className="text-center">
                                                <button type="button" className="btn btn-info" onClick={() => onInsert("Junior Suite Room", 2000)}>
                                                    Add Room
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-primary">
                                        <div className="panel-heading text-center">
                                            <h4
                                            // onChange={handleHotelTypeChange}
                                            >Executive Suite Room</h4>
                                        </div>
                                        <div className="ps-2 text-center">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <div className="panel-body ">
                                            <h2 className="card-text text-center"
                                            //  onChange={handlePriceChange}
                                            >₹ 4000</h2>
                                            <hr />
                                            <div className="text-center">
                                                <button type="button" className="btn btn-info" onClick={() => onInsert("Executive Suite Room", 4000)}>
                                                    Add Room
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-primary">
                                        <div className="panel-heading text-center">
                                            <h4
                                            // onChange={handleHotelTypeChange}
                                            >Super Deluxe Room</h4>
                                        </div>
                                        <div className="ps-2 text-center">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <div className="panel-body ">
                                            <h2 className="card-text text-center"
                                            //  onChange={handlePriceChange}
                                            >₹ 7000</h2>
                                            <hr />
                                            <div className="text-center">
                                                <button type="button" className="btn btn-info" onClick={() => onInsert("Super Deluxe Room", 7000)}>
                                                    Add Room
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE-INNER  */}
            </div>
            {/* 
                // const handleHotelTypeChange = (event) => {
                //     setData({ ...data, roomType: event.target.value });
                // };

                // const handlePriceChange = (event) => {
                //     setData({ ...data, price: parseInt(event.target.value) });
                // };
                            <div className="form-group">
                                        <label>Room Type</label>
                                        <select
                                            className="form-control"
                                            value={data.hotelType}
                                            onChange={handleHotelTypeChange}
                                        >
                                            <option disabled selected value=""> -- Select -- </option>
                                            <option>Junior Suite Room</option>
                                            <option>Executive Suite Room</option>
                                            <option>Super Deluxe Room</option>
                                        </select>
                                    </div> */}
            {/* <hr /> */}
            {/* <div className="form-group">
                                        <label>Price</label>
                                        <select
                                            className="form-control"
                                            value={data.price}
                                            onChange={handlePriceChange}
                                        >
                                            <option disabled value=""> -- Select -- </option>
                                            <option>{parseInt("2000")}</option>
                                            <option>{parseInt("4000")}</option>
                                            <option>{parseInt("7000")}</option>
                                        </select>
                                    </div> */}
        </div >

    );

}

export default AddProduct;
