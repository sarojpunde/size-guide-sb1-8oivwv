import { useEffect } from "react";
import { json } from "@remix-run/node";
import {
  useActionData,
  useNavigation,
  useSubmit,
  useLoaderData,
} from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({
    sizeGuides: [
      { id: 1, name: "Women's Clothing" },
      { id: 2, name: "Men's Shoes" },
    ],
  });
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  
  // Handle form submissions here (e.g., creating or updating size guides)

  return json({ status: "success" });
};

export default function Index() {
  const nav = useNavigation();
  const { sizeGuides } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();

  const isLoading =
    ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";

  useEffect(() => {
    if (actionData?.status === "success") {
      shopify.toast.show("Size guide created");
    }
  }, [actionData]);

  const createSizeGuide = () => submit({}, { replace: true, method: "POST" });

  return (
    <Page>
      <ui-title-bar title="Customizable Size Guides">
        <button variant="primary" onClick={createSizeGuide}>
          Create size guide
        </button>
      </ui-title-bar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Size Guides
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Create and manage size guides for your products.
                  </Text>
                </BlockStack>
                <List>
                  {sizeGuides.map((guide) => (
                    <List.Item key={guide.id}>
                      <Link to={`/app/size-guides/${guide.id}`}>{guide.name}</Link>
                    </List.Item>
                  ))}
                </List>
                <InlineStack gap="300">
                  <Button loading={isLoading} onClick={createSizeGuide}>
                    Create size guide
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}