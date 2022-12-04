import {TabButton} from './styledComponents'

const DictionaryItem = props => {
  const {direction, tabClicked, activeTab} = props
  const {displayText, value} = direction
  console.log(activeTab, value)
  const onTabClick = event => {
    tabClicked(event.target.value)
  }
  const tabStatus = activeTab === value ? 1 : 0.5
  console.log(tabStatus)

  return (
    <TabButton value={value} onClick={onTabClick} active={tabStatus}>
      {displayText}
    </TabButton>
  )
}

export default DictionaryItem
