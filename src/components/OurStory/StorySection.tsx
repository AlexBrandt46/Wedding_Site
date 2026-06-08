import { ImageList } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StorySection({
	header,
	hisText,
	hersText,
	images,
}: {
	header: string;
	hisText: string;
	hersText: string;
	images?: string[];
}) {
	return (
		<Box>
			<h6>{header}</h6>
			<Typography variant="body1" align="left">
				<b>His:</b>
				{hisText}
			</Typography>
			<Typography variant="body1" align="left">
				<b>Hers:</b>
				{hersText}
			</Typography>

			{images && (
				<ImageList
					sx={{ width: '100%', height: 'auto' }}
					cols={3}
					rowHeight={164}
				>
					{images.map((src, index) => (
						<img
							key={index}
							src={`/Wedding_Site/${src}`}
							alt={`Story image ${index + 1}`}
							loading="lazy"
						/>
					))}
				</ImageList>
			)}
		</Box>
	);
}
