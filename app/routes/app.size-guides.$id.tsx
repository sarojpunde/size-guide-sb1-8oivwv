import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  DataTable,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request, params }) => {
  await authenticate.admin(request);

  // Fetch size guide data based on params.id
  const sizeGuide = {
    id: params.id,
    name: "Women's Clothing",
    sizes: [
      ["XS", "0-2", "4-6", "32-34"],
      ["S", "4-6", "8-10", "36-38"],
      ["M", "8-10", "12-14", "40-42"],
    ],
  };

  return json({ sizeGuide });
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  
  // Handle form submissions here (e.g., updating size guide)

  return json({ status: "success" });
};

export default function SizeGuideEditor() {
  const { sizeGuide } = useLoaderData();
  const submit = useSubmit();

  const handleSave = (formData) => {
    submit(formData, { method: "POST" });
  };

  return (
    <Page
      breadcrumbs={[{ content: "Size Guides", url: "/app" }]}
      title={sizeGuide.name}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <FormLayout>
              <TextField
                label="Guide Name"
                value={sizeGuide.name}
                onChange={() => {}}
              />
              <DataTable
                columnContentTypes={["text", "text", "text", "text"]}
                headings={["Standard Size", "US Size", "UK Size", "EU Size"]}
                rows={sizeGuide.sizes}
              />
              <Button onClick={() => {}}>Add Size</Button>
              <Button primary onClick={handleSave}>Save Size Guide</Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}