export interface Guest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  attending: boolean;
  dietRestrictions?: string;
}

export function createGuest(): Guest {
  return {
    firstName: '',
    lastName: '',
    emailAddress: '',
    attending: false,
  };
}
