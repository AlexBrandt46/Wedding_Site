import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StorySection({
  header,
  hisText,
  hersText,
}: {
  header: string;
  hisText: string;
  hersText: string;
}) {
  return (
    <Box>
      <Typography variant="h6">{header}</Typography>
      <Typography variant="body1" align="left">
        <b>His:</b>
        {hisText}
      </Typography>
      <Typography variant="body1" align="left">
        <b>Hers:</b>
        {hersText}
      </Typography>
    </Box>
  );
}
