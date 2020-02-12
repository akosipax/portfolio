import React from "react"

import styles from "./builtWith.module.css"

const BuiltWith = ({ items }) => (
  <ul className="my-6">
    {items.map(item => {
      return (
        <li className={styles.itemLogo}>
          <a href={item.href}>
            <img
              src={item.src}
              alt={item.description}
              title={item.description}
            />
          </a>
        </li>
      )
    })}
  </ul>
)

export default BuiltWith
