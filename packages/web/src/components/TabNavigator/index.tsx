import React from 'react'
import {Tabs} from '@dracula/dracula-ui'

interface TabOption {
  onTabPress: () => void 
  name: string
}

interface Props {
  tabOptions: TabOption[] 
}

const TabNavigator = (props: Props) => {
  const { tabOptions } = props
  const [activeTab, setActiveTab] = React.useState(tabOptions[0].name)

  const selectTab = React.useCallback((name: string, onTabPress: () => void) => {
    setActiveTab(name)
    
    onTabPress()
  }, [activeTab])

  return (
    <>
      <Tabs color="pink">
        {tabOptions.map(({ onTabPress, name }) => (
          <li className={`drac-tab ${activeTab === name ? 'drac-tab-active' : ''}`} onClick={() => {selectTab(name, onTabPress)}}>
              <a className="drac-tab-link drac-text"> 
                {name} 
              </a>
            </li>
        ))}
      </Tabs>
    </>
  )
}

export default TabNavigator 
