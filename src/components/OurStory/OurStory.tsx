import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import StorySection from './StorySection';
import { getStoryEntries } from '../../utils/supabaseUtil';
import type { StoryEntry } from '../../types/SupabaseTypes';

// TODO: Add more content for each section.
export default function OurStory() {
  const [storyEntries, setStoryEntries] = useState<StoryEntry[]>([]);

  useEffect(() => {
    getStoryEntries()
      .then(setStoryEntries)
      .catch((error) => {
        console.error('Unable to load story entries:', error);
      });
  }, []);

  return (
    <Paper className="pagePaper">
      {storyEntries.map((entry) => (
        <StorySection
          key={entry.id}
          header={entry.header}
          hisText={String(entry.his_text)}
          hersText={String(entry.hers_text)}
        />
      ))}
    </Paper>
  );
}
//
// <Typography variant="body1" align="left">
{
  /* <b>His: </b> */
}
{
  /* { */
}
//("It was also the first place we got to take Ila swimming that year in the pond at the bottom of the trail. Fast-forward almost a year later after Bre's ring was delivered, and I started reaching out to a few of each of our closest friends from college about coming into town to surprise Bre at the proposal and celebrate together afterwards. And the happy coincedences kept coming once everyone confirmed they were able to arrive at the site all together. Our friends Alex and Arlo who lived across the courtyard from our apartment knew exactly where I was going to propose and were able to meet our friends flying in at the trail to get everyone set up to surprise Bre and show our friend Jackson good spots to take pictures. Finding a reason to get Bre to go on a hike worked out easily too. Our friends Tristen and Luis ");
// "The very first time we went hiking at Narrows of the Harpeth in April, 2024 and climbed to the top of the bluff overlook, I knew that was where I wanted to ask Bre to marry me. At the top of the trail is a rock outcropping that looks out over the Harpeth River and has a ledge which is a perfect place to sit and enjoy the amazing views. More importantly, I knew that I wanted us to celebrate the beginning of the next chapter of our lives surrounded by some of our closest friends. It seemed like the entire day was destined to go perfectly. All of our friends flying in got to the airport at the same time to get dropped off at the trail together, our friend and photographer Jackson was able to drive down from Michigan in time, our friends Alex and Arlo knew exactly where to meet our friends and get them organized at the top, and our friends Tristen and Luis having their friend Kenzie move in with them just days before gave us the perfect cover to get Bre there under the guise of meeting them there to take our dogs on a hike and swim while getting to get to know Kenzie more. Once the day arrived, it took everything in me to not smile so hard that I'd give something away. When we met up with Tristen, Luis, Kenzie, and Cusco, Luis and I took Cusco a litle bit ahead and I finally got to let out some of those smiles I'd been holding in. As we got climbed to the overlook where I was going to ask Bre, Luis and I saw Jackson hanging onto the side of the cliff in the perfect spot to take a candid photo once I got down on one knee. I was relieved that Bre didn't see him (somehow) and had her set down on the rock ledge when I asked her if she would marry me and spend the rest of our lives together with Dolly in her arms and the ring attached to Ila's collar. As I did that, Jackson popped out for more pictures while everyone else walked down from the top of the bluff."
// }
{
  /* </Typography>; */
}
