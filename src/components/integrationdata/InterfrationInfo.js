import { Card, List, Stack, TextStyle, Layout, Page, Grid, Icon } from '@shopify/polaris';
import {LockMinor} from '@shopify/polaris-icons';

import React from 'react'
import Rakuten from '../../Assets/Images/rakuten.png'
import Onbuy from '../../Assets/Images/onbuy.png'
import Catch from '../../Assets/Images/catch.png'
import Lock from '../../Assets/Images/lock.png'
export default function IntegrationInfo() {


const myInterData = [
    {
        image : Rakuten,
        shopname:"RAKUTEN INTEGRATION",
    },
    {
        image : Onbuy,
        shopname:"ONBUY INTEGRATION",
    },
    {
        image : Catch,
        shopname:"CATCH INTEGRATION",
    }
]

const abc =  myInterData.map((item, index) =>

<Page fullWidth>
 <div className='custom-grid-cell'>
 <Grid>
 <Grid.Cell columnSpan={{xs: 6, sm: 2, md: 2, lg: 4, xl: 4}}>
      <Card title="" sectioned>
        <Card.Section>
          <Stack sectioned  alignment='center' spacing='loose'> 
            <img src={item.image} />
            <TextStyle>{item.shopname}</TextStyle>
            <Icon source={LockMinor} />
          </Stack>
        </Card.Section>
      </Card>
    </Grid.Cell>

    <Grid.Cell columnSpan={{xs: 6, sm: 2, md: 2, lg: 4, xl: 4}}>
      <Card title="" sectioned>
        <Card.Section>
          <Stack sectioned  alignment='center' spacing='loose'>
            <img src={item.image} />
            <TextStyle>{item.shopname}</TextStyle>
            <Icon source={LockMinor} />
          </Stack>
        </Card.Section>
      </Card>
    </Grid.Cell>

   <Grid.Cell columnSpan={{xs: 6, sm: 2, md: 2, lg: 4, xl: 4}}>
      <Card title="" sectioned>
        <Card.Section>
          <Stack sectioned alignment='center' spacing='loose'>
            <img src={item.image} />
            <TextStyle>{item.shopname}</TextStyle>
            <Icon source={LockMinor} />
          </Stack>
        </Card.Section>
      </Card>
    </Grid.Cell>
  </Grid>
 </div>
</Page>


);
  return (
   <div>
       {abc}
   </div>
  )
}


