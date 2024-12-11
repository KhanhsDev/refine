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
import { IPost, IUser } from "@interface";

const { Title } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  useEffect(() => {
    console.log("check data show", data);
  }, [data]);
  const record = data?.data;
  const router = useRouter();

  const { id } = useParams<{ id: string }>();
  const { data: userData, isLoading: userIsLoading } = useOne({
    resource: "users",
    id: record?.userId || "",
    queryOptions: {
      enabled: !!record,
    },
  });
  const { formProps, formLoading } = useForm<IPost, HttpError>({
    action: "edit",
    resource: `posts`,
    id,
    redirect: "list",
  });
  useEffect(() => {
    console.log({ formProps });
  }, [formProps]);
  return (
    <Show
      isLoading={isLoading}
      footerButtons={<></>}
      headerButtons={<></>}
      title="Chi tiết bài đăng"
    >
      <Form
        {...formProps}
        layout="vertical"
        onFinish={() => {}}
        requiredMark={false}
      >
        <Form.Item
          label="id"
          name={["id"]}
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
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly value={userData?.data?.name} />
        </Form.Item>
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="body"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea readOnly rows={4} />
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
