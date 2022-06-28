import React, { useCallback, useState } from 'react'
import { Table } from 'antd';
import { Page, Stack, Button, Autocomplete, Icon, Heading,
} from '@shopify/polaris';
import {SearchMinor, RefreshMinor} from '@shopify/polaris-icons';

export const Transactions = () => {
  const deselectedOptions = [
    {value: 'rustic', label: 'Rustic'},
    {value: 'antique', label: 'Antique'},
    {value: 'vinyl', label: 'Vinyl'},
    {value: 'vintage', label: 'Vintage'},
    {value: 'refurbished', label: 'Refurbished'},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue[0]);
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search by Transaction ID, Shop Name, Shop URL"
    />
  );
  const columns = [
    {
      title: 'Transaction Name / ID',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a className='table-trans-text'>{text}</a>,
      width:280,
    },
    {
      title: 'Shop Name',
      dataIndex: 'shop',
      key: 'shopname',
      render: (text) => <a className='table-link-text'>{text}</a>,
      width:180,
    },
    {
      title: 'Created At',
      dataIndex: 'created',
      key: 'created',
        width:200,
    },
    {
      title: 'Gross Amount',
      dataIndex: 'grossamt',
      key: 'created',
      width:150,
    },
    {
      title: 'Net Amount',
      dataIndex: 'netamt',
      key: 'created',
        width:150,
    },
    {
      title: 'Shopify Fee',
      dataIndex: 'shopifyfee',
      key: 'created',
        width:150,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'created', 
      width:150,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'created', 
       width:150,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'created', 
       width:150,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'created', 
       width:150,
    },

  ];
  
  const data = [
    {
      key: '1',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '2',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '3',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '4',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '5',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '6',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },
    {
      key: '7',
      name: 'AppSubscriptionSale/142703508',
      shop: 'ISPEKTRUM',
      created: '2022-06-06 01:59:35',
      grossamt:69.00,
      netamt:56.65,
      shopifyfee:69.00,
      currency:'USD',
    },   
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div className='transactions_section'>
     <Page fullWidth>  
        <div className='transactions_table'>
         <Table columns={columns} dataSource={data}  scroll={{x: 1000,y: 600,}}  />
       </div>
     </Page>
    </div>
  )
}
export default Transactions;      