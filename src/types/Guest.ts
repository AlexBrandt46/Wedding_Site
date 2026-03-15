export interface Guest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  attending: boolean;
  dietaryRestrictions: DietaryRestrictions;
  otherDescription: string;
}

export function createGuest(): Guest {
  return {
    firstName: '',
    lastName: '',
    emailAddress: '',
    attending: false,
    dietaryRestrictions: createDietaryRestrictions(),
    otherDescription: ''
  };
}

export interface DietaryRestrictions {
  gluten: boolean;
  nut: boolean;
  dairy: boolean;
  vegetarian: boolean;
  vegan: boolean;
}

function createDietaryRestrictions(): DietaryRestrictions {
  return {
    gluten: false,
    nut: false,
    dairy: false,
    vegetarian: false,
    vegan: false,
  };
}

export function getFormattedDietary(dietaryRestrictions: DietaryRestrictions): string[] {
  const dietaryRestricts: string[] = [];

  for (const diet in dietaryRestrictions) {
    const key = diet as keyof DietaryRestrictions;
    console.log(key);
    if (dietaryRestrictions[key] === true) {
      dietaryRestricts.push(key);
    }
  }

  return dietaryRestricts;
}
