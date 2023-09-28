import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import BigCard from '~/components/BigCard'
import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import styles from '~/styles/FrontPage.module.css'
import SmallCard from '../components/SmallCard'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
    return (
        <Container>
            <section className={styles.main__container}>
                <div className={styles.side__container}>
                    {posts.slice(1).map((post, index) =>
                        <SmallCard key={post._id} post={post} />
                        )
                    }
                </div>
                <div className={styles.first__container}>
                    <BigCard key={posts[0]._id} post={posts[0]} /> 
                </div>

          </section>

    </Container>
  )
}
