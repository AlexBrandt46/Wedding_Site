import TabPanel from '@mui/lab/TabPanel';
import EventInfo from '../EventInfo/EventInfo';
import Main from '../Main/Main';
import OurStory from '../OurStory/OurStory';
import RsvpForm from '../Rsvp/RsvpForm';
import type TabListProps from '../../types/TabListProps';

// TODO: Refactor this to loop over the MENU_ITEMS and render the appropriate component based on the value. This will make it easier to add/remove menu items in the future without having to modify this component.
export default function TabPanels({ setTab, setUid, uid }: Partial<TabListProps>) {
  return (
    <>
      <TabPanel value="1" className="pagePanel">
        <Main />
      </TabPanel>
      <TabPanel value="2" className="pagePanel">
        <OurStory />
      </TabPanel>
      <TabPanel value="3" className="pagePanel">
        <EventInfo />
      </TabPanel>
      <TabPanel value="4" className="pagePanel">
        <RsvpForm setTab={setTab} setUid={setUid} uid={uid} />
      </TabPanel>
    </>
  );
}
