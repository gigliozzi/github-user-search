import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={290}
    viewBox="0 0 282 290"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="0" y="0" rx="8" ry="8" width="280" height="290" />
  </ContentLoader>
)

export default MyLoader

