export interface TabListProps {
	tab: string;
	uid: string;
	setTab: (value: string) => void;
}

export interface RsvpAlertProps {
	alertMessage: string;
	showPastDeadlineMessage: boolean;
	useMarginBottom?: boolean;
}

export interface TabBoxProps {
	handleChange: (event: React.SyntheticEvent, newValue: string) => void;
	orientation?: 'horizontal' | 'vertical' | undefined;
}

export interface RsvpConfirmationProps {
	onBackToForm: () => void;
	onBackToHome: () => void;
}
