import React from "react"

import { Stages } from "../../../site-config"

const Explore = ({ learn }) => {
  const [expand, setExpanded] = React.useState(false)
  const exploreNode = Stages.find(stg => stg.name === "EXPLORE")
  const subtopics = exploreNode.learnPortalLinks.sub
  return (
    <div
      style={{
        border: "2px solid #ffbf40",
        backgroundColor: "#fff",
        width: "420px",
      }}
    >
      <div className="px-3 py-3">
        <p className="mb-0 lead" style={{ fontWeight: "400" }}>
          Explore
        </p>
        <p className="mb-0 p-18">Consider diverse alternatives</p>
      </div>
      <div className="px-3">
        {subtopics.slice(0, 5).map(topic => (
          <div
            style={{
              height: "36px",
              backgroundColor: "#efefef",
              color: "#fff",
              cursor: "pointer",
            }}
            className="d-flex align-items-center mb-0 px-3 mb-2"
            onClick={() =>
              learn(`${exploreNode.learnPortalLinks.main}/${topic.link}`)
            }
          >
            <p className="mb-0">{topic.title}</p>
          </div>
        ))}

        {expand &&
          subtopics.slice(5, subtopics.length).map(topic => (
            <div
              style={{
                height: "36px",
                backgroundColor: "#efefef",
                color: "#fff",
                cursor: "pointer",
              }}
              className="d-flex align-items-center mb-0 px-3 mb-2"
              onClick={() =>
                learn(`${exploreNode.learnPortalLinks.main}/${topic.link}`)
              }
            >
              <p className="mb-0">{topic.title}</p>
            </div>
          ))}

        {subtopics.length > 5 && !expand && (
          <div
            style={{
              height: "36px",
              backgroundColor: "#ffffff",
              color: "#2ECC71",
              border: "1px solid #ffbf40",
              cursor: "pointer",
            }}
            className="d-flex align-items-center mb-0 px-3 mb-2 justify-content-center"
            onClick={() => setExpanded(true)}
          >
            <p className="mb-0">{`+${subtopics.length - 5} more`}</p>
          </div>
        )}
      </div>
      <div
        className="py-3 mb-0 mt-5 text-center"
        style={{ backgroundColor: "#ffbf40", color: "#fff", cursor: "pointer" }}
        onClick={() => learn(exploreNode.learnPortalLinks.main)}
      >
        <p className="mb-0 text-center">
          <span className="text-dark">{`LEARN ${exploreNode.name}`}</span>
        </p>
      </div>
    </div>
  )
}

export default Explore
