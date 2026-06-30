import TabPanel from '@mui/lab/TabPanel';
import EventInfo from '../EventInfo/EventInfo';
import Main from '../Main/Main';
import OurStory from '../OurStory/OurStory';
import RsvpForm from '../Rsvp/RsvpForm';
import type { TabListProps } from '../../types/Props';
import styles from '../../App.module.css';

const registryTabStyle = {
	display: 'none',
};

// TODO: Refactor this to loop over the MENU_ITEMS and render the appropriate component based on the value. This will make it easier to add/remove menu items in the future without having to modify this component.
export default function TabPanels({ setTab, uid }: Partial<TabListProps>) {
	return (
		<>
			<TabPanel value="1" className={styles.pagePanel}>
				<Main />
			</TabPanel>
			<TabPanel value="2" className={styles.pagePanel}>
				<OurStory />
			</TabPanel>
			<TabPanel value="3" className={styles.pagePanel}>
				<EventInfo />
			</TabPanel>
			<TabPanel value="4" className={styles.pagePanel}>
				<RsvpForm setTab={setTab} uid={uid} />
			</TabPanel>
			<TabPanel value="5" className={styles.pagePanel} style={registryTabStyle} />
		</>
	);
}
