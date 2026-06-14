import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function PageHeader({ title }: { title: string }) {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				{title}
			</Typography>
			<Divider sx={{ margin: '1rem 0', width: '100%' }} />
		</>
	);
}
