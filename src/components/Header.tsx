import Link from 'next/link';
import Image from 'next/image';
import headerStyles from '~/styles/Header.module.css';

const genres = ['E-EDITION', 'NEWS', 'SPORTS', 'ARTS', 'OPINIONS', 'NEWTON MAGAZINE', 'MULTIMEDIA']

export default function Header({ children }: { children: React.ReactNode}) {
	return(
		<div className={headerStyles.header}>
			<div className={headerStyles.header__logo}>
				<Link href="/">
					<Image
						className={headerStyles.header__logo__image}
						src="https://s3.amazonaws.com/heights-photos/wp-content/uploads/2021/09/26192503/the_heights_header-1.png"
						height={109}
						width={375}
						alt=""
					/>
				</Link>
				
			</div>
			{/*<nav className={headerStyles.header__nav}>*/}
			{/*	{genres.map((item, index) => (*/}
			{/*		<Link href={`/${item.toLowerCase()}`}>*/}
			{/*			{item}*/}
			{/*		</Link>*/}
			{/*	))}*/}
			{/*</nav>*/}
		</div>
	);
}