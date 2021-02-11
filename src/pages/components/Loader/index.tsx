import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={1}
    width={850}
    height={250}
    viewBox="0 0 850 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="235" y="21" rx="2" ry="2" width="162" height="26" /> 
    <rect x="235" y="58" rx="2" ry="2" width="400" height="400" /> 
    <rect x="405" y="22" rx="2" ry="2" width="100" height="26" /> 
    <rect x="513" y="22" rx="2" ry="2" width="92" height="26" /> 
    <rect x="-61" y="22" rx="2" ry="2" width="280" height="290" />
  </ContentLoader>
)

export default MyLoader

