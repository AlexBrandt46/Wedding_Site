import { List, ListItem, Paper } from "@mui/material";

export default function EventInfo() {
  return (
    <Paper sx={{ textAlign: "left", padding: "1rem" }}>
      <p>
        <b>Where:</b> 113 S Division St, Spring Lake, MI 49456
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.357936109817!2d-86.2034736228249!3d43.07596968957139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88198152002a1cb3%3A0x9fc82a6170eb75d2!2sThe%20Lilley%20Mansion%20Bed%20and%20Breakfast!5e0!3m2!1sen!2sus!4v1768167177460!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "4px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
