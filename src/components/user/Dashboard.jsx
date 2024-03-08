import Tabs from '../compound/Tabs'
import Button from '../ui/Button'

const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <Tabs.TabList>
          <Button>Tab 1</Button>
          <Button>Tab 2</Button>
          <Button>Tab 3</Button>
        </Tabs.TabList>
        <Tabs.TabPanel id={1}>Tab 1 content</Tabs.TabPanel>
        <Tabs.TabPanel id={2}>Tab 2 content</Tabs.TabPanel>
        <Tabs.TabPanel id={3}>Tab 3 content</Tabs.TabPanel>
      </Tabs>
    </div>
  )
}

export default Dashboard
