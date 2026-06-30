import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import RsvpAlert from './RsvpAlert';
import Divider from '@mui/material/Divider';
import styles from './EventInfo.module.css';
import PageHeader from '../PageHeader';

export default function EventInfo() {
	return (
		<Paper
			sx={{
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				padding: '1rem',
			}}
			className="pagePaper"
		>
			<PageHeader title="Event RSVP" />
			<Box
				className={styles.eventScheduleItem}
				sx={{
					flexDirection: 'column',
				}}
			>
				<Typography variant="h6">RSVP Deadline</Typography>
				<RsvpAlert alertMessage="Please RSVP by August 10th, 2026." showPastDeadlineMessage={true} />
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">When</Typography>
				<Typography variant="body1">September 12th, 4:30 PM EST</Typography>
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">Where</Typography>
				<Typography variant="body1" gutterBottom>
					<b>The Lilley Mansion Bed and Breakfast</b>
				</Typography>
				<Typography variant="body1" gutterBottom>
					113 S. Division St.
				</Typography>
				<Typography variant="body1" gutterBottom>
					Spring Lake, MI 49456
				</Typography>
			</Box>
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'row' }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.357936109817!2d-86.2034736228249!3d43.07596968957139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88198152002a1cb3%3A0x9fc82a6170eb75d2!2sThe%20Lilley%20Mansion%20Bed%20and%20Breakfast!5e0!3m2!1sen!2sus!4v1768167177460!5m2!1sen!2sus"
					width="100%"
					height="450"
					style={{ border: 0, borderRadius: '4px' }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Grand Haven Map"
				/>
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">Dress Code</Typography>
				<h3>Ladies</h3>
				<Typography variant="body1" sx={{ width: '50%' }}>
					Dresses in summery hues and light pastels are encouraged! Satin, floral patterns and textures are all welcome.
					The ceremony will be outdoors, so please keep that in mind when selecting your footwear.
				</Typography>
				<h3>Gentlemen</h3>
				<Typography variant="body1" sx={{ width: '50%' }}>
					We encourage light-colored suits, linen, and pastels. A tie is not required, but feel free to add one if you
					like!
				</Typography>
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">Schedule of Events</Typography>
				<List>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								4:00 PM:
							</Typography>
							<Typography variant="body1">Pre-Ceremony Greeting Time</Typography>
						</Box>
					</ListItem>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								4:30 PM:
							</Typography>
							<Typography variant="body1">Ceremony</Typography>
						</Box>
					</ListItem>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								5:30 PM:
							</Typography>
							<Typography variant="body1">Cocktail Hour</Typography>
						</Box>
					</ListItem>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								6:30 PM:
							</Typography>
							<Typography variant="body1">Reception</Typography>
						</Box>
					</ListItem>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								9:00 PM:
							</Typography>
							<Typography variant="body1">End of Reception</Typography>
						</Box>
					</ListItem>
					<ListItem>
						<Box className={styles.eventScheduleItem}>
							<Typography variant="body1" className={styles.eventScheduleTime}>
								9:30 PM:
							</Typography>
							<Typography variant="body1">Post-Wedding Celebrations in Spring Lake and Grand Haven</Typography>
						</Box>
					</ListItem>
				</List>
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">Overnight Accommodations</Typography>
				<Typography variant="body1" gutterBottom>
					For those wishing to stay nearby, there are several hotels and numerous AirBnbs, bed and breakfasts, and VRBOs
					within a short distance of the venue. A few have been included below!
				</Typography>
				<Box
					className={styles.eventScheduleItem}
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
						gap: '1rem',
						width: '100%',
					}}
				>
					<Box sx={{ width: '100%' }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.752856111001!2d-86.21604776013719!3d43.07558086502502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881981abb73111b1%3A0x75dce87e973abba4!2sHoliday%20Inn%20Grand%20Haven%20-%20Muskegon%20by%20IHG!5e0!3m2!1sen!2sus!4v1778553832599!5m2!1sen!2sus"
							width="100%"
							height="450"
							style={{
								border: 0,
								borderRadius: '4px',
								display: 'block',
								width: '100%',
							}}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Box>
					<Box sx={{ width: '100%' }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5369.527957250377!2d-86.23367462866109!3d43.062040559753136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sus!4v1778554090993!5m2!1sen!2sus"
							width="100%"
							height="450"
							style={{
								border: 0,
								borderRadius: '4px',
								display: 'block',
								width: '100%',
							}}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Box>
				</Box>
			</Box>
			<Divider className="divider" />
			<Box className={styles.eventScheduleItem} sx={{ flexDirection: 'column' }}>
				<Typography variant="h6">Age Limit</Typography>
				<Typography variant="body1">
					The event is strictly <b>18+</b> by request of the venue to keep the day stress-free and fun for everyone.
				</Typography>
			</Box>
		</Paper>
	);
}
