import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { MENU_TABS, REGISTRY_LINK } from '../../types/MenuTabs';
import type { TabBoxProps } from '../../types/Props';

export default function TabBox({ handleChange, orientation }: TabBoxProps) {
	const handleChangeWithRedirect = (event: React.SyntheticEvent, newValue: string) => {
		if (newValue === '5') {
			// Registry tab
			window.location.href = REGISTRY_LINK;
			return;
		}
		handleChange(event, newValue);
	};

	return (
		<Box
			className="siteBox"
			sx={{
				borderBottom: 1,
				borderColor: 'divider',
				flexGrow: 1,
				justifyContent: 'center',
				backgroundColor: 'var(--blue)',
				display: 'flex',
			}}
		>
			<TabList id="tabList" onChange={handleChangeWithRedirect} orientation={orientation ?? 'horizontal'}>
				{Object.entries(MENU_TABS).map(([value, label]) => (
					<Tab
						key={value}
						label={
							value === '5' ? (
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
									{label}
									<OpenInNewIcon sx={{ fontSize: 16 }} />
								</Box>
							) : (
								label
							)
						}
						value={value}
						sx={{
							wordWrap: 'break-word',
							fontSize: { xs: '1.5rem', md: '1rem' },
						}}
					/>
				))}
			</TabList>
		</Box>
	);
}
