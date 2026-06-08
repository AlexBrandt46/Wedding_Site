import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import React from 'react';
import type { TabListProps } from '../../types/Props';
import TabBox from './TabBox';
import TabPanels from './TabPanels';

export default function WideTabList(props: TabListProps) {
	const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
		props.setTab(newValue);
	};

	return (
		<Box
			sx={{
				top: 0,
				justifyContent: 'center',
			}}
		>
			<TabContext value={props.tab}>
				<TabBox handleChange={handleChange} />
				<TabPanels setTab={props.setTab} uid={props.uid} />
			</TabContext>
		</Box>
	);
}
