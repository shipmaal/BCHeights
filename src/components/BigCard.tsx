import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

import styles from '~/styles/cards/BigCard.module.css'

export default function BigCard({ post }: { post: Post }) {
    return (
        <div className={styles.card}>
            {post.mainImage ? (
                <Image
                    className={styles.card__cover}
                    src={urlForImage(post.mainImage).width(500).height(300).url()}
                    height={300}
                    width={500}
                    alt=""
                />
            ) : (
                    <div className={styles.card__cover__none} />
            )}
            <div className={styles.card__container }>
                <h3 className={ styles.card__title} >
                    <a className={styles.card__link} href={`/${post.slug.current}`}>
                        {post.title}
                    </a>
                </h3>
                <span className={styles.card__title__divider}></span>
                <p className={styles.card__excerpt }>{post.excerpt}</p>
                <p className={ styles.card__date}>{formatDate(post._createdAt)}</p>
            </div>
        </div>
    )
}
