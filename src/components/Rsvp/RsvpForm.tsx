import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar, { type SnackbarOrigin } from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Tooltip, { type TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Fragment, useEffect, useState } from 'react';
import { createGuest } from '../../types/Guest';
import { getGuest, sendEmail, supabase } from '../../utils/supabaseUtil';
import RsvpAlert from '../EventInfo/RsvpAlert';
import RsvpConfirmation from './RsvpConfirmation';
import { isDatePastRsvpDeadline } from '../../utils/dateUtil';
import { isNotEmptyString, isValidEmail, isValidName, isFormIncomplete } from '../../utils/rsvpValidationUtil';
import type { ResendTemplateVar } from '../../types/ResendTemplateVar';
import styles from './RsvpForm.module.css';
import PageHeader from '../PageHeader';

const anchorOrigin: SnackbarOrigin = {
	vertical: 'top',
	horizontal: 'center',
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}));

interface RsvpFormProps {
	setTab?: (value: string) => void;
	uid?: string;
}

export default function RsvpForm({ setTab: setTab, uid }: RsvpFormProps) {
	const [guest, setGuest] = useState(uid !== '' ? undefined : createGuest());
	const [uidFromUrl, setUidFromUrl] = useState(uid ?? '');
	const [dietTextboxHidden, setDietTextboxHidden] = useState(true);
	const [attending, setAttending] = useState<boolean | null>(null);
	const [dietDescription, setDietDescription] = useState('');
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [firstNameError, setFirstNameError] = useState('');
	const [lastNameError, setLastNameError] = useState('');
	const [dietDescriptionError, setDietDescriptionError] = useState('');
	const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);
	const [addressError, setAddressError] = useState('');

	const pastRsvpDeadline: boolean = isDatePastRsvpDeadline(new Date());

	const formIncomplete = isFormIncomplete(
		attending,
		guest?.firstName ?? '',
		guest?.lastName ?? '',
		guest?.emailAddress ?? '',
		guest?.address ?? '',
		emailError,
		dietTextboxHidden,
		dietDescription
	);

	useEffect(() => {
		if (uidFromUrl && uidFromUrl !== '' && guest === undefined) {
			getGuest(uidFromUrl).then((guestData) => {
				setGuest(guestData);
				setAttending(guestData.attending);
				setDietDescription(guestData.dietRestrictions ?? '');
				setDietTextboxHidden(!guestData.dietRestrictions);
			});
		} else if (uid && uid !== '' && uid !== uidFromUrl) {
			setUidFromUrl(uid);
		}
	}, [uidFromUrl]);

	const submitRsvp = async () => {
		const trimmedFirstName = guest!.firstName.trim();
		const trimmedLastName = guest!.lastName.trim();
		const trimmedEmail = guest!.emailAddress.trim();
		const trimmedDietDescription = dietDescription.trim();
		const trimmedAddress = guest!.address.trim();
		let validInput = true;

		const setErrorMsg = (
			validationFn: (input: string) => boolean,
			input: string,
			setError: (msg: string) => void,
			errorMsg: string
		) => {
			if (!validationFn(input)) {
				setError(errorMsg);
				validInput = false;
			} else {
				setError('');
			}
		};

		setErrorMsg(isValidEmail, trimmedEmail, setEmailError, 'Please enter a valid email address.');
		setErrorMsg(isValidName, trimmedFirstName, setFirstNameError, 'Please enter a non-empty first name.');
		setErrorMsg(isValidName, trimmedLastName, setLastNameError, 'Please enter a non-empty last name.');
		setErrorMsg(isNotEmptyString, trimmedAddress, setAddressError, 'Please enter a non-empty address.');

		if (!dietTextboxHidden) {
			setErrorMsg(
				isNotEmptyString,
				trimmedDietDescription,
				setDietDescriptionError,
				'Please enter a non-empty dietary restriction if the "Dietary Restrictions" option is selected.'
			);
			validInput = validInput && isNotEmptyString(trimmedDietDescription);
		} else {
			setDietDescriptionError('');
		}

		if (!validInput) {
			return;
		}

		let guestInputs: ResendTemplateVar = {
			uid: guest!.uid,
			attending: guest!.attending,
			firstName: trimmedFirstName,
			lastName: trimmedLastName,
			emailAddress: trimmedEmail,
			address: trimmedAddress,
		};

		if (!dietTextboxHidden) {
			guestInputs.dietRestrictions = trimmedDietDescription;
		}

		const { error } = await supabase.from('guests').upsert(guestInputs);

		// TODO: improve error handling to give more specific feedback to user on what went wrong with their submission
		// TODO: Refactor this to simplify logic and reduce number of state variables if possible
		if (error) {
			setShowErrorAlert(true);
			setIsRsvpSubmitted(false);
		} else {
			setShowErrorAlert(false);
			setIsRsvpSubmitted(true);
			window.history.replaceState({}, '', window.location.pathname);
			await sendEmail('confirmation', guestInputs);
		}
	};

	const handleAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const attendingVal = (e.target as HTMLInputElement).value;
		setAttending(attendingVal === 'attending');
		setGuest({ ...guest!, attending: attendingVal === 'attending' });
	};

	const handleBackToForm = () => {
		setIsRsvpSubmitted(false);
		setGuest(createGuest());
		setAttending(null);
		setDietDescription('');
		setDietTextboxHidden(true);
	};

	const handleBackToHome = () => {
		if (setTab) {
			setTab('1');
		}
	};

	if (isRsvpSubmitted) {
		return <RsvpConfirmation onBackToForm={handleBackToForm} onBackToHome={handleBackToHome} />;
	}

	return (
		guest && (
			<Paper
				sx={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					padding: '1rem',
					alignItems: 'center',
				}}
				className="pagePaper"
			>
				<Snackbar open={showErrorAlert} onClose={() => setShowErrorAlert(false)} anchorOrigin={anchorOrigin}>
					<Alert severity="error">There was an issue with your RSVP submission. Please try again.</Alert>
				</Snackbar>
				<PageHeader title="Event RSVP" />
				<RsvpAlert
					alertMessage="Please RSVP by August 10th, 2026."
					showPastDeadlineMessage={true}
					useMarginBottom={true}
				/>
				<RsvpAlert
					alertMessage="Please submit a separate RSVP for each guest in your party. You may use the same email address for each guest if needed."
					showPastDeadlineMessage={false}
					useMarginBottom={true}
				/>
				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<RadioGroup
						name="attending-radio-buttons-group"
						sx={{ justifyContent: 'center', flexDirection: 'row' }}
						value={attending}
						onChange={handleAttendingChange}
					>
						<FormControlLabel
							value="attending"
							control={<Radio />}
							label="Attending"
							checked={attending !== null && attending}
						/>
						<FormControlLabel
							value="notAttending"
							control={<Radio />}
							label="Not Attending"
							checked={attending !== null && !attending}
						/>
					</RadioGroup>
					<TextField
						className={styles.rsvpInput}
						required
						label="First Name"
						helperText={firstNameError}
						error={!!firstNameError}
						value={guest.firstName}
						onChange={(e) => {
							setGuest({ ...guest!, firstName: e.target.value });
							setFirstNameError('');
						}}
					/>
					<TextField
						className={styles.rsvpInput}
						required
						label="Last Name"
						value={guest.lastName}
						helperText={lastNameError}
						error={!!lastNameError}
						onChange={(e) => {
							setGuest({ ...guest!, lastName: e.target.value });
							setLastNameError('');
						}}
					/>
					<TextField
						className={styles.rsvpInput}
						required
						label="Email"
						type="email"
						value={guest.emailAddress}
						helperText={emailError || "We'll never share your email."}
						error={!!emailError}
						onChange={(e) => {
							setGuest({ ...guest!, emailAddress: e.target.value });
							setEmailError('');
						}}
					/>
					<TextField
						className={styles.rsvpInput}
						required
						label="Address"
						type="address"
						value={guest.address}
						helperText={addressError || "We'll never share your address."}
						error={!!addressError}
						onChange={(e) => {
							setGuest({ ...guest, address: e.target.value });
							setAddressError('');
						}}
					/>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								label="Dietary Restrictions"
								control={
									<Checkbox
										name="diet"
										checked={!dietTextboxHidden}
										onChange={(e) => setDietTextboxHidden(!e.target.checked)}
									/>
								}
							></FormControlLabel>
							<TextField
								className={styles.rsvpInput}
								label="Please Specify"
								required={!dietTextboxHidden}
								disabled={dietTextboxHidden}
								sx={{ visibility: dietTextboxHidden ? 'hidden' : 'visible' }}
								value={dietDescription}
								helperText={dietDescriptionError}
								error={!!dietDescriptionError}
								onChange={(e) => {
									setDietDescription(e.target.value);
									setDietDescriptionError('');
								}}
							/>
						</FormGroup>
					</FormControl>
				</form>
				<HtmlTooltip
					title={
						formIncomplete && (
							<Fragment>
								The following information must still be provided before you can submit your RSVP:
								<ul>
									{attending === null && <li>Attendance</li>}
									{guest!.firstName === '' && <li>First Name</li>}
									{guest!.lastName === '' && <li>Last Name</li>}
									{guest!.emailAddress === '' && <li>Email Address</li>}
									{guest!.address === '' && <li>Address</li>}
									{firstNameError !== '' && <li>{firstNameError}</li>}
									{lastNameError !== '' && <li>{lastNameError}</li>}
									{emailError !== '' && <li>{emailError}</li>}
									{addressError !== '' && <li>{addressError}</li>}
									{!dietTextboxHidden && dietDescription === '' && (
										<li>Specific dietary restrictions if you checked "Other".</li>
									)}
								</ul>
							</Fragment>
						)
					}
				>
					<span>
						<Button
							type="submit"
							variant="contained"
							sx={{ marginTop: '1vh' }}
							onClick={submitRsvp}
							disabled={pastRsvpDeadline || formIncomplete}
						>
							Submit RSVP
						</Button>
					</span>
				</HtmlTooltip>
			</Paper>
		)
	);
}
