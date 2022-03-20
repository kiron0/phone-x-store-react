import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import "./Phones.css";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    // console.log(phones)
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=apple`)
            .then((res) => res.json())
            .then((data) => setPhones(data.data));
    }, []);
    //   handle input change & add to search field
    const handleInputChange = (e) => {
        const { value } = e.target;
        fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`)
            .then((res) => res.json())
            .then((data) => setPhones(data.data));
    };
    const handleSubmit = () => {
        handleInputChange();
    }
    return (
        <div className="container">
            <div className="input-group mb-3 mx-auto my-5 search-input">
                <input
                    onBlur={handleInputChange}
                    id="search-field"
                    type="text"
                    className="form-control"
                    placeholder="Search your phone..."
                    aria-label=""
                    aria-describedby="button-addon2"
                ></input>
                <button
                    onClick={handleSubmit}
                    id="search-btn"
                    className="btn btn-outline-secondary"
                    type="button"
                >
                    Search
                </button>
            </div>
            <p className="text-center mt-5 mb-5 available">
                Available {phones.length} {phones[0]?.brand} phones now
            </p>
            <div className="phones-container">
                {phones.map((phone) => (
                    <Phone phone={phone} key={phone.slug}></Phone>
                ))}
            </div>
        </div>
    );
};

export default Phones;
