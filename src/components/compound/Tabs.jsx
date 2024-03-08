import React, { createContext, useContext, useState } from 'react'

const TabContext = createContext()

const Tabs = ({ children }) => {
  const [current, setCurrent] = useState(2)

  return (
    <TabContext.Provider value={{ current, setCurrent }}>
      {children}
    </TabContext.Provider>
  )
}

const TabList = ({ children }) => {
  const {  setCurrent } = useContext(TabContext)

  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      onClick: () => setCurrent(index + 1)
    })
  })
}

const TabPanel = ({ id, children }) => {
  const { current } = useContext(TabContext)
  return current === id ? <div>{children}</div> : null
}

Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

export default Tabs
