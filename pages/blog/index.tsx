import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import { Posts } from "../../components/blog";
import { client } from "../../tina/__generated__/client";
import { Layout } from "../../components/layout";
import { InferGetStaticPropsType } from "next";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const posts = props.data.blogConnection.edges;

  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large" width="large">
          <Posts data={posts} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.blogQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type ArticlesType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["blogConnection"]["edges"][number];
