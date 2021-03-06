import React from "react";

const Harvest = ({learn}) => (
  <div style={{ border: "2px solid #5fd996", backgroundColor: "#fff", width: "420px" }}>
    <div className="px-3 py-3">
      <p className="mb-0 lead" style={{ fontWeight: "400" }}>Harvest</p>
      <p className="mb-0 p-18">Operate with highest return on investment</p>
    </div>
    <div className="px-3">
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Scalability Verification </p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Rapid Response Process</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Continuous improvement strategy</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Feature Usage Analysis</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#efefef", color: "#fff" }}
        className="d-flex align-items-center mb-0 px-3 mb-2"
      >
        <p className="mb-0">Monitoring and Incident Management</p>
      </div>
      <div
        style={{ height: "36px", backgroundColor: "#ffffff", color: "#2ECC71", border: "1px solid #5fd996" }}
        className="d-flex align-items-center mb-0 px-3 mb-2 justify-content-center"
      >
        <p className="mb-0">+8 more</p>
      </div>
    </div>
    <div className="py-3 mb-0 mt-5 text-center" style={{ backgroundColor: "#5fd996", color: "#fff", cursor: "pointer" }} onClick={() => learn("7-harvest")}>
      <p className="mb-0 text-center">
        <span className="text-white">LEARN HARVEST</span>
      </p>
    </div>
  </div>

)

export default Harvest;