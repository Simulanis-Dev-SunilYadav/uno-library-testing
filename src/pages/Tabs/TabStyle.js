import React from 'react'
import { UiComponents } from '@simulanisindia/ui';

const TabStyle = () => {
        const {SimTabs} = UiComponents
    
  return (
    <>
        <SimTabs small={false} numberCount={true}  defaultActiveKey="tab1">
            <div key="tab1" tabTitle="Training">
                <h1>Content of Tab 1</h1>
                <p>This is the content for the first tab.</p>
            </div>
            <div key="tab2" tabTitle="Guiding">
                <h1>Content of Tab 2</h1>
                <p>This is the content for the second tab.</p>
            </div>
            <div key="tab3" tabTitle="Authoring">
                <h1>Content of Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </div>
            <div key="tab4" tabTitle="Collaborating">
                <h1>Content of Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </div>
            <div key="tab5" tabTitle="Simulating">
                <h1>Content of Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </div>
        </SimTabs>
    </>
  )
}

export default TabStyle
