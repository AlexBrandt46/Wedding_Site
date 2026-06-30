import { ImageList } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const imageListStyle = { width: '100%', height: 'auto' };

export default function StorySection({
	header,
	text_body,
	images,
}: {
	header: string;
	text_body: string;
	images?: string[];
}) {
	const getImagePath = (src: string) => {
		const basename = src.replace(/\.[^.]+$/, '');
		return {
			webp: `/Wedding_Site/${basename}.webp`,
			jpg: `/Wedding_Site/${src}`,
		};
	};

	return (
		<Box>
			<Typography variant="h6">{header}</Typography>
			<Typography variant="body1" align="left">
				{text_body}
			</Typography>

			{images && (
				<ImageList sx={imageListStyle} cols={1} rowHeight="auto">
					{images.map((src, index) => {
						const paths = getImagePath(src);
						return (
							<picture key={index}>
								<source srcSet={paths.webp} type="image/webp" />
								<img
									src={paths.jpg}
									alt={`Story image ${index + 1}`}
									loading="lazy"
									style={{ width: '60%', height: 'auto', borderRadius: '4px' }}
								/>
							</picture>
						);
					})}
				</ImageList>
			)}
		</Box>
	);
}
