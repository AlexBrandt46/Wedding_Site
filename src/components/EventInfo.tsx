import { List, ListItem, Paper } from "@mui/material";

export default function EventInfo() {
  return (
    <Paper sx={{ textAlign: "left", padding: "1rem" }}>
      <p>
        <b>Where:</b> 113 S Division St, Spring Lake, MI 49456
      </p>
      <br />
      <p>
        <b>When:</b> September 12th, TBD - Early Afternoon Start-Time
      </p>
      <br />
      <p>
        <b>Dress Code:</b> Garden Party/Bridgerton (be fun/colorful/creative)
      </p>
      <br />
      <b>Schedule of Events:</b>
      <List>
        <ListItem>
          <p>
            <b>1 PM: </b> Pre-Ceremony Greeting Time
          </p>
        </ListItem>
        <ListItem>
          <p>
            <b>2 PM: </b> Ceremony
          </p>
        </ListItem>
        <ListItem>
          <p>
            <b>3 PM:</b> Cocktail Hour
          </p>
        </ListItem>
        <ListItem>
          <p>
            <b>4 PM: </b> Reception
          </p>
        </ListItem>
        <ListItem>
          <p>
            <b>9 PM: </b> End of Reception
          </p>
        </ListItem>
        <ListItem>
          <p>
            <b>9:30 PM: </b> Bar-Hopping in Spring Lake and Grand Haven
          </p>
        </ListItem>
      </List>
      <p>
        <b>Overnight Accomodations:</b> For those wishing to stay nearby, we
        have reserved a block of rooms at the <code>HOTEL NAME HERE</code> under
        name: <code>NAME</code>. The block is first come, first serve, but there
        are several other hotels and numerous AirBnbs and VRBOs nearby.
      </p>
      <br />
      <p>
        <b>Age Limit:</b> The event is strictly <b>18+</b> by request of both
        the venue and ourselves to keep the day stress-free and fun for
        everyone.
      </p>
    </Paper>
  );
}
