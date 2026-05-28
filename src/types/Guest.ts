export interface Guest {
  readonly uid: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  attending: boolean;
  dietRestrictions?: string;
}

export function createGuest(): Guest {
  console.log('create new guest');

  return {
    uid: crypto.randomUUID(),
    firstName: '',
    lastName: '',
    emailAddress: '',
    attending: false,
  };
}
