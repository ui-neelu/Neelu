import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
import { useState } from 'react';
const originData = [];

for (let i = 0; i < 40; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    id:136,
    url:'worldsuperstore.myshopify.com',
    ownername:'Patrick Abudah',
    number:4159063664,
    email:'patrickabudah@gmail.com',
    config:'Yes'
    
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,    
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Abc = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Merchant ID',
      dataIndex: 'id',
      width: '140px',
      editable: true,
    },
    {
      title: 'Shop URL',
      dataIndex: 'url',
      width: '280px',
      editable: true,
      render: (text) => <a className='main_color'>{text}</a>,
    },
    {
      title: 'Owner Name',
      dataIndex: 'ownername',
        width: '200px',
      editable: true,
    },
    {
        title: 'Mobile Number',
        dataIndex: 'number',
        width: '150px',
        editable: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        width: '250px',
        editable: true,
        render: (text) => <a className='main_color'>{text}</a>,
      },
      {
        title: 'Config Set',
        dataIndex: 'config',
        width: '150px',
        editable: true,
      },
      {
        title: 'Config Set',
        dataIndex: 'config',
          width: '150px',
        editable: true,
      },
      {
        title: 'Config Set',
        dataIndex: 'config',
          width: '150px',
        editable: true,
      },
    {
      title: 'Action',
      dataIndex: 'operation',
      width: '150px',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <div className='merchants_section'>
    <Form form={form} component={false}>
      <Table rowSelection={rowSelection} scroll={{x: 1000,y: 600,}} 
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
    </div>
  );
};

export default Abc;