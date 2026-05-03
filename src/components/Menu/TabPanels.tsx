import TabPanel from '@mui/lab/TabPanel';
import EventInfo from '../EventInfo/EventInfo';
import Main from '../Main/Main';
import OurStory from '../OurStory/OurStory';
import PhotoGallery from '../Photos/PhotoGallery';
import RsvpForm from '../RsvpForm';

// TODO: Refactor this to loop over the MENU_ITEMS and render the appropriate component based on the value. This will make it easier to add/remove menu items in the future without having to modify this component.
export default function TabPanels() {
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
        <RsvpForm />
      </TabPanel>
      <TabPanel value="5" className="pagePanel">
        <PhotoGallery />
      </TabPanel>
    </>
  );
}
