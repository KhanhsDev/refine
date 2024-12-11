"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseKey, BaseRecord } from "@refinedev/core";
import { Space, Table, TableColumnsType } from "antd";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  const columns: TableColumnsType = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hành động",
      render: (_: any, record: BaseRecord) => {
        return (
          <Space>
            <EditButton hideText size="small" recordItemId={record.id} />
            <ShowButton hideText size="small" recordItemId={record.id} />
            <DeleteButton hideText size="small" recordItemId={record.id} />{" "}
          </Space>
        );
      },
    },
  ];
  return (
    <List>
      <Table {...tableProps} rowKey="id" columns={columns}>
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"title"} />
        <Table.Column title={"Actions"} dataIndex="actions" />
      </Table>
    </List>
  );
}
