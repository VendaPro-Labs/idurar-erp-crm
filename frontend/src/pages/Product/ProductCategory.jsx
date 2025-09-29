import { Table, Typography } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

const { Title } = Typography;

// Mock Data for the table
const mockData = [
  {
    key: '1',
    name: 'Software Development',
    pricing: '1500.00 USD',
    tax: 'VAT (10%)',
    created: '2023-10-27',
    updated: '2023-10-27',
  },
  {
    key: '2',
    name: 'UI/UX Design Services',
    pricing: '800.00 USD',
    tax: 'No Tax',
    created: '2023-10-26',
    updated: '2023-10-26',
  },
  {
    key: '3',
    name: 'Cloud Hosting',
    pricing: '50.00 USD',
    tax: 'Service Tax (5%)',
    created: '2023-10-25',
    updated: '2023-10-27',
  },
];

// Define the columns for the table
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Pricing', dataIndex: 'pricing', key: 'pricing' },
  { title: 'Tax', dataIndex: 'tax', key: 'tax' },
  { title: 'Created', dataIndex: 'created', key: 'created' },
  { title: 'Updated', dataIndex: 'updated', key: 'updated' },
];

export default function ProductCategory() {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
      <PageHeader
        title={<Title level={3}>Product Category List</Title>}
        ghost={false}
      />
      <div style={{ padding: '20px' }}>
        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="key"
          pagination={false}
        />
      </div>
    </div>
  );
}