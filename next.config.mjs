/** @type {import('next').NextConfig} */
const config = {
	images: { 
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' 
			},
			{protocol: 'https',
			hostname: 's3.amazonaws.com'}] 
			},

}

export default config
