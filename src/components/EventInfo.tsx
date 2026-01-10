import { List, ListItem, Paper } from "@mui/material";

export default function EventInfo() {
  return (
    <Paper sx={{ textAlign: "left", padding: "1rem" }}>
      <b>Where:</b> 113 S Division St, Spring Lake, MI 49456
      <br />
      <b>When:</b> TBD - Early Afternoon Start-Time
      <br />
      <b>Dress Code:</b> Garden Party/Bridgerton (be fun/colorful/creative)
      <br />
      <b>Schedule of Events:</b>
      <List>
        <ListItem>
          <b>1 PM:</b> Pre-Ceremony Greeting Time
        </ListItem>
        <ListItem>
          <b>2 PM:</b> Ceremony
        </ListItem>
        <ListItem>
          <b>3 PM:</b> Cocktail Hour
        </ListItem>
        <ListItem>
          <b>4 PM:</b> Reception
        </ListItem>
        <ListItem>
          <b>9 PM:</b> End of Reception
        </ListItem>
        <ListItem>
          <b>9:30 PM:</b> Bar-Hopping in Spring Lake and Grand Haven
        </ListItem>
      </List>
      <b>Overnight Accomodations:</b> For those wishing to stay nearby, we have
      reserved a block of rooms at the <code>HOTEL NAME HERE</code> under name:{" "}
      <code>NAME</code>. The block is first come, first serve, but there are
      several other hotels and numerous AirBnbs and VRBOs nearby.
      <br />
      <b>Age Limit:</b> The event is strictly <b>18+</b> by request of both the
      venue and ourselves to keep the day stress-free and fun for everyone.
    </Paper>
  );
}
