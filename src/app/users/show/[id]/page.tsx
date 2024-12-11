"use client";

import {
  DateField,
  MarkdownField,
  Show,
  TextField,
  useForm,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Button, Form, Input, Space, Typography } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { HttpError } from "@refinedev/core";
import { IUser } from "@interface";

const { Title } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const { formProps, formLoading } = useForm<IUser, HttpError>({
    action: "edit",
    resource: "users",
    id,
    redirect: "list",
  });

  useEffect(() => {
    console.log({ formProps });
  }, [formProps]);

  // Lấy record từ dữ liệu trả về
  const record = data?.data;

  // Đảm bảo rằng record có giá trị trước khi truy cập
  if (isLoading || !record) {
    return <div>Loading...</div>;
  }

  return (
    <Show
      isLoading={isLoading}
      footerButtons={<></>}
      headerButtons={<></>}
      title="Chi tiết người dùng"
    >
      <Form
        {...formProps}
        layout="vertical"
        onFinish={() => {}}
        requiredMark={false}
        initialValues={{
          id: record.id,
          name: record.name,
          email: record.email,
          phone: record.phone,
          city: record.address?.city,
          website: record.website,
          company: record.company?.name,
        }}
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label="Tác giả"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label="Thành phố"
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          label="Công ty"
          name="company"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>

        <Space style={{ width: "100%", justifyContent: "end", marginTop: 12 }}>
          <Button type="text" onClick={() => router.back()}>
            Quay lại
          </Button>
        </Space>
      </Form>
    </Show>
  );
}
