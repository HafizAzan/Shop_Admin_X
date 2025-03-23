import React, { memo, useEffect, useState } from "react";
import { Steps, Form, message } from "antd";
import PageHeader from "components/PageHeader";
import CustomButton from "components/CustomButton";
import Spinner from "components/Spinner";
import ProductBasicInfo from "features/AddProductStep/ProductBasicInfo";
import ProductMediumInfo from "features/AddProductStep/ProductMediumInfo";
import ProductLastStep from "features/AddProductStep/ProductLastStep";
import { useNavigate, useParams } from "react-router-dom";
import { AUTHENTICATED_ROUTES_URL } from "utils/routesConstant";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductThunk,
  getProductByIdThunk,
  updateProductThunk,
} from "hooks/useProduct";
import { cn } from "utils/tailwind.merge";

const { Step } = Steps;

const AddProduct = () => {
  const { id } = useParams();
  const [fileList, setFileList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdThunk(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (data && id) {
      form.setFieldsValue({ ...data });
    }
  }, [data, form, id]);

  const steps = [
    {
      title: "Basic Info",
      content: <ProductBasicInfo />,
    },
    {
      title: "Product Details",
      content: <ProductMediumInfo />,
    },
    {
      title: "Upload Images",
      content: (
        <ProductLastStep
          fileList={fileList}
          setFileList={setFileList}
          form={form}
        />
      ),
    },
  ];

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  const onFinish = async () => {
    try {
      await form.validateFields();

      if (current === steps.length - 1) {
        setLoading(true);
        const formData = form.getFieldValue();

        if (!formData || Object.keys(formData).length === 0) {
          throw new Error("❌ Form Data is undefined or empty!");
        }

        const payload = {
          ...formData,
          ...(fileList?.length && { image: fileList[0]?.url || fileList[0] }),
        };

        if (id) {
          await dispatch(updateProductThunk({ id, updatedData: payload }));
          message.success("Product updated successfully!");
        } else {
          await dispatch(addProductThunk(payload));
          message.success("Product added successfully!");
        }

        navigate(AUTHENTICATED_ROUTES_URL.PRODUCTS);
      } else {
        setCurrent((prev) => prev + 1);
      }
    } catch (error) {
      message.error("Please fill all required fields!");
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (changedValues) => {
    const fieldName = Object.keys(changedValues)[0];
    form.validateFields([fieldName]);
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <PageHeader
        text={`${id ? "Edit Product" : "Add Product"}`}
        items={[
          { label: "All Products", link: "/products" },
          { label: id ? "Edit Product" : "Add Product" },
        ]}
      />

      <div className="p-4 pr-16 mt-10 rounded-lg shadow add-product bg-white1">
        <Steps current={current} style={{ color: "white", fontSize: "16px" }}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="mt-6"
          validateTrigger="onSubmit"
          onValuesChange={handleFieldChange}
        >
          {steps[current].content}

          <div className="flex justify-end mt-4 space-x-2">
            {current > 0 && (
              <CustomButton
                onClick={prev}
                className="bg-transparent hover:!bg-blue2 hover:!text-white hover:!border-none"
              >
                Previous
              </CustomButton>
            )}

            <CustomButton
              className={cn({
                "!bg-green-900 border-none !text-white":
                  current === steps.length - 1,
              })}
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              {current !== steps.length - 1
                ? "Next"
                : id
                ? "Update Product"
                : "Add Product"}
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  );
};

export default memo(AddProduct);
