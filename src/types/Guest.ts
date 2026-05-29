export interface Guest {
  readonly uid: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  attending: boolean;
  dietRestrictions?: string;
  address: string;
}

export function createGuest(): Guest {
  return {
    uid: crypto.randomUUID(),
    firstName: '',
    lastName: '',
    emailAddress: '',
    attending: false,
    address: '',
  };
}
