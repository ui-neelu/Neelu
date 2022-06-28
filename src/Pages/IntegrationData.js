import { Card, Stack, Scrollable,List, Link, Layout, Page, Icon, Heading, Button} from '@shopify/polaris';
import React, { useState }  from 'react'
import bestbuy from '../Assets/Images/bestbuy.png'
import Bonanza from '../Assets/Images/Bonanza.png'
import Fruugo from '../Assets/Images/Fruugo.png'
import Onbuy from '../Assets/Images/onbuy.png'
import Rakuten from '../Assets/Images/rakuten.png'
import Catch from '../Assets/Images/catch.png'
import DownArrow from '../Assets/svg/downarrow.svg'
import GridIcon from '../Assets/Images/grid-icon.svg'
import ListIcons from '../Assets/Images/listicons.svg'
import {LockMajor} from '@shopify/polaris-icons';

// import Accordion from './Accordion';

export default function IntegrationData() {
  
 const [isActive, setActive] = useState("false");
 const [isActiveAccordion, setActiveAccordion] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleAccordion = () => {
    setActiveAccordion(!isActiveAccordion);
  };



const myInteData = [
    {
    image : bestbuy,
    shopname:"BEST BUY CA - INTEGRATION",
    title : "Shop Details",
    data1 : "Transactions Bestybuy",
    data2 : "Merchants",
    data3: "App Events",
    data4: "Pricing",
    url: 'posts/6',
    },
    {
    image : Bonanza,
    shopname:"FRUGGO INTEGRATION",
    title : "Shop Details",
    data1 : "Client Details",
    data2: "Transactions",
    data3 : "Merchants",
    data4: "App Events",
    url: 'posts/6',
    },
    {
    image : Fruugo,
    shopname: "BONANZA INTEGRATION",
    title : "Shop Details",
    data1 : "Order Details",
    data2 : "Payment Details",
    data3: "Bookmarks",
    data4: "Transactions",
    url: 'posts/6',
    },
    
]

const myInteDataLocked = [
    {
        image : Rakuten,
        shopname:"BEST BUY CA - INTEGRATION ",
    },
    {
        image :  Onbuy,
        shopname:"FRUGGO INTEGRATION",
    },
    {
        image : Catch,
        shopname: "BONANZA INTEGRATION",
    },
    {
        image : Rakuten,
        shopname:"BEST BUY CA - INTEGRATION",
    },
    {
        image :  Onbuy,
        shopname:"FRUGGO INTEGRATION",
    },
    {
        image : Catch,
        shopname: "BONANZA INTEGRATION",
    },
    {
        image : Rakuten,
        shopname:"BEST BUY CA - INTEGRATION",
    },
    {
        image :  Onbuy,
        shopname:"FRUGGO INTEGRATION",
    },
    {
        image : Catch,
        shopname: "BONANZA INTEGRATION",
    },
    {
        image : Rakuten,
        shopname:"BEST BUY CA - INTEGRATION",
    },
    {
        image :  Onbuy,
        shopname:"FRUGGO INTEGRATION",
    },
    {
        image : Catch,
        shopname: "BONANZA INTEGRATION",
    },
]

    const accordionData = [
      {
        title: 'Section 1',
        content: `Lorem ipsum`
      },
      {
        title: 'Section 2',
        content: `Lorem ipsum`
      },
      {
        title: 'Section 3',
        content: `Lorem ipsum`
      }
    ]
  
const IntegrationsList =  myInteData.map((item, index) =>

 <Layout.Section oneThird={!isActive}>
   <Card sectioned key={index}>
    <Stack vertical spacing="loose">
        <Stack spacing="loose" distribution="leading" alignment="center" >
            {isActive ? <Button onClick={handleAccordion}>  <img src={DownArrow} alt='images' className='custom_downarrow'/></Button> : null}
            <img alt='Logoimage' src={item.image} />
            <Heading>{item.shopname}</Heading>
        </Stack>
         {isActive && isActiveAccordion ? null : 
         <div className={isActiveAccordion ? "Hi" : "dd"}>
         <Stack distribution="fill">
            <Scrollable  style={{height: '280px'}}>
                <List>
                    <List.Item>
                        <Link url=''>{item.title}</Link>
                    </List.Item>
                    <List.Item>
                        <Link url=''>{item.data1}</Link>
                    </List.Item>
                    <List.Item>
                        <Link url=''>{item.data2}</Link>
                    </List.Item>
                    <List.Item>
                        <Link url=''>{item.data3}</Link>
                    </List.Item>
                    <List.Item>
                        <Link url=''>{item.data4}</Link>
                    </List.Item>
                </List>

            </Scrollable>
    </Stack></div>
         }
       
    </Stack>
    </Card>
</Layout.Section>
);
const IntegrationsListLocked =  myInteDataLocked.map((item, index) =>

 <Layout.Section oneHalf>
   <Card sectioned key={index}>
    <Stack vertical spacing="loose" distribution="leading" >
        <Stack alignment="center">
            {isActive ? <div> </div> : null}
            <img src={item.image} alt='images'/>
            <Heading>{item.shopname}</Heading>
            <Icon source={LockMajor} color="base"/>
        </Stack>
    </Stack>
    </Card>
</Layout.Section>
);
// console.log(isActive , "dd")
  return (
      
    <Page fullWidth
    title="Our Integrations"
    // primaryAction={}
    secondaryActions={ <Stack>
        <button onClick={handleToggle} className="list_icon">{isActive ? <img src={GridIcon}  alt='grid-icon' /> : <img src={ListIcons}  alt='grid-icon' />}</button>
    </Stack>}>

       
        <div className={`main-wrapper ${isActive ? "wrapper-grid" : "wrapper-list"}`}>
            <div className="integrations_details">
                <Layout>
                    {IntegrationsList}
                    {/* <div className=''>
                            {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                            ))}
                    </div>   */}
                </Layout>
                
        </div>
      <div className="custom_hr">
      < hr/>
      </div>
    <div className='custom_loked_data'>
        <Layout>
        {IntegrationsListLocked} 
        </Layout>
    </div>
    </div>
    </Page>
  )
}


