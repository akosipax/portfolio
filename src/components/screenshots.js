import React from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const Screenshots = ({ images }) => (
  <div className="flex text-center" aria-label="screenshots of the project">
    {images.map(screenshot => (
      <figure className="flex-1">
        <Zoom>
          <img
            src={screenshot.src}
            alt={screenshot.description}
            className="shadow-md h-32 object-cover object-top"
          />
        </Zoom>
        <figcaption className="text-xs py-2 italic">
          {screenshot.description}
        </figcaption>
      </figure>
    ))}
  </div>
)

export default Screenshots
